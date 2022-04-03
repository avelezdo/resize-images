const express = require('express')
const sharp = require('sharp')
const multer = require('multer')
const AdmZip = require('adm-zip')
const app = express()
const { deleteFilesFromDirectory } = require('./utils')
app.use(express.json()) //para poder utilizar el body-parser

//multer options
const upload = multer({
	dest: 'images',
})

app.get('/', function (_, res) {
	res.send("It's working from server!")
})

app.get('/api', function (_, res) {
	res.json({ message: 'Hello from server side' })
})

app.post('/api/resizeImage', upload.single('file'), async function (req, res) {
	const data = req.body
	const sizes = JSON.parse(data.sizes)
	const fileName = req.file.originalname.split('.')[0]
	const ext = req.file.mimetype.split('/')[1]
	const zip = new AdmZip()
	if (!data || !data.name || sizes.length === 0) {
		return res.status(400).json({
			error: 'favorite.sizes are missing',
		})
	}

	let imageNames = []
	let fileData,
		downloadName = null
	const imageNamePromises = sizes.map(async (size) => {
		const imageName = `${fileName}_${size.height}_${size.width}.${ext}`
		imageNames.unshift(imageName)
		return await sharp(req.file.path)
			.resize({ height: size.height, width: size.width, fit: 'fill' })
			.toFile(req.file.destination + '/' + imageName)
	})
	await Promise.all(imageNamePromises)
	if (imageNames.length === 1) {
		fileData = await sharp(req.file.path).resize({ height: sizes[0].height, width: sizes[0].width, fit: 'fill' }).toBuffer()
		downloadName = imageNames[0]
	} else {
		imageNames.forEach((imageName) => {
			zip.addLocalFile(__dirname + '/images/' + `/${imageName}`)
		})
		downloadName = `${Date.now()}.zip`
		fileData = zip.toBuffer()
		zip.writeZip(__dirname + '/zips/' + downloadName)
	}

	deleteFilesFromDirectory('images')
	deleteFilesFromDirectory('zips')

	res.set('Content-Type', 'application/octet-stream')
	res.set('Content-Disposition', `attachment; filename=${downloadName}`)
	res.set('Content-Length', fileData.length)
	res.send(fileData)
	res.status(201).json()
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
