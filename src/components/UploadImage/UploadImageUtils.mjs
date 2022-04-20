function initImageUpload(box, callback) {
	const uploadField = box.querySelector('.upload-image-button')
	uploadField.addEventListener('change', getFile)

	function getFile(e) {
		const file = e.currentTarget.files[0]
		checkType(file)
		callback()
	}

	function previewImage(file) {
		const thumb = box.querySelector('.image-preview')
		const reader = new FileReader()

		reader.onload = function () {
			thumb.style.backgroundImage = 'url(' + reader.result + ')'
		}
		reader.readAsDataURL(file)
	}

	function checkType(file) {
		const imageType = /image.*/
		if (!file.type.match(imageType)) {
			throw 'El archivo no es una imagen'
		} else if (!file) {
			throw 'No se ha seleccionado ninguna imagen'
		} else {
			previewImage(file)
		}
	}
}

function initImageUploadHandlers(callback) {
	initImageUpload(document.querySelector('.box'), callback)
}

export { initImageUploadHandlers }
