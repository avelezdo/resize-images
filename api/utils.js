const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const tinify = require('tinify')
const AdmZip = require('adm-zip')
tinify.key = 'mcnT6hzfjrHBQMKv51cXj961DkY98bhG'

function deleteFilesFromDirectory(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) throw err

		for (const file of files) {
			fs.unlink(path.join(directory, file), (err) => {
				if (err) throw err
			})
		}
	})
}

function reduceWeight(imageNames) {
	return new Promise(async (res, rej) => {
		const leanImagePromises = imageNames.map(async (imageName) => {
			const completeImagePath = __dirname + '/images/' + `${imageName}`
			return await tinify.fromFile(completeImagePath).toFile(completeImagePath)
		})
		await Promise.all(leanImagePromises)
		res()
	})
}

async function getImageNames(sizes, file) {
	return new Promise(async (res, rej) => {
		let imageNames = []
		const fileName = file.originalname.split('.')[0]
		const ext = file.mimetype.split('/')[1]

		const imageNamePromises = sizes.map(async (size) => {
			const imageName = `${fileName}_${size.height}_${size.width}.${ext}`
			imageNames.unshift(imageName)
			return await sharp(file.path)
				.resize({ height: size.height, width: size.width, fit: 'fill' })
				.toFile(file.destination + '/' + imageName)
		})
		await Promise.all(imageNamePromises)
		res(imageNames)
	})
}

async function oneImageTreatment(path, size, imageName) {
	return new Promise(async (res, rej) => {
		let fileData = await sharp(path).resize({ height: size.height, width: size.width, fit: 'fill' }).toBuffer()
		fileData = await tinify.fromBuffer(fileData).toBuffer()
		const downloadName = imageName
		res({ fileData, downloadName })
	})
}

function manyImageTreatment(imageNames) {
	return new Promise(async (res, rej) => {
		await reduceWeight(imageNames)
		const zip = new AdmZip()
		imageNames.forEach((imageName) => {
			zip.addLocalFile(__dirname + '/images/' + `${imageName}`)
		})
		downloadName = `${Date.now()}.zip`
		fileData = zip.toBuffer()
		zip.writeZip(__dirname + '/zips/' + downloadName)
		res({ fileData, downloadName })
	})
}

// export { deleteFilesFromDirectory }
module.exports = {
	deleteFilesFromDirectory,
	getImageNames,
	oneImageTreatment,
	manyImageTreatment,
}
