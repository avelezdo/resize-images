const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const { deleteFilesFromDirectory, getImageNames, oneImageTreatment, manyImageTreatment } = require('./utils')
app.use(express.json()) // para poder utilizar el body-parser
app.use(express.static(path.join(__dirname, '../dist')))
const upload = multer({
	dest: 'images',
})

app.get('/test', function (_, res) {
	res.send("It's working from server!")
})

app.get('/api', function (_, res) {
	res.json({ message: 'Hello from server side' })
})

app.post('/api/resizeImage', upload.single('file'), async function (req, res) {
	const data = req.body
	const sizes = JSON.parse(data.sizes)
	if (!data || !data.name || sizes.length === 0) {
		return res.status(400).json({
			error: 'favorite.sizes are missing',
		})
	}

	const imageNames = await getImageNames(sizes, req.file)
	const { fileData, downloadName } =
		imageNames.length === 1 ? await oneImageTreatment(req.file.path, sizes[0], imageNames[0]) : await manyImageTreatment(imageNames)

	deleteFilesFromDirectory('images')
	deleteFilesFromDirectory('zips')

	res.set('Content-Type', 'application/octet-stream')
	res.set('Content-Disposition', `attachment; filename=${downloadName}`)
	res.set('Content-Length', fileData.length)
	res.send(fileData)
	res.status(201).json()
})

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
	try {
		res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
	} catch (error) {
		console.log(error)
	}
})

const port = process.env.port || 3001

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})
