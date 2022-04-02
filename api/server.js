const express = require('express')
const sharp = require('sharp')
const multer = require('multer')
const app = express()
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

app.post('/api/resizeImage', upload.single('file'), function (req, res) {
	const data = req.body
	const sizes = JSON.parse(data.sizes)
	const fileName = req.file.originalname.split('.')[0]
	const ext = req.file.mimetype.split('/')[1]
	if (!data || !data.name || sizes.length === 0) {
		return res.status(400).json({
			error: 'favorite.sizes are missing',
		})
	}
	sizes.forEach(async (size) => {
		await sharp(req.file.path).resize({ height: size.height, width: size.width, fit: 'fill' }).toFile(`${fileName}_${size.height}_${size.width}.${ext}`)
	})
	res.status(201).json()
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
