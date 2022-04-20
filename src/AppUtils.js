function forceDownload(imageData, headers) {
	const anchor = document.createElement('a')
	document.querySelector('section').appendChild(anchor)
	const url = window.URL.createObjectURL(imageData)
	anchor.href = url
	anchor.download = headers.get('content-disposition').split('filename=')[1]
	anchor.click()
	window.URL.revokeObjectURL(url)
	document.querySelector('section').removeChild(anchor)
}

function getSizesData() {
	const sizes = [...document.querySelectorAll('.dimensions-list-wrapper')].map((sizesWrapper) => {
		const widthInput = sizesWrapper.querySelectorAll('input')[0]
		const heightInput = sizesWrapper.querySelectorAll('input')[1]
		return {
			height: Number(heightInput.value),
			width: Number(widthInput.value),
		}
	})

	return {
		name: 'file',
		sizes: JSON.stringify(sizes),
	}
}

function getFormData(sizesData) {
	const fileInput = document.querySelector('.upload-image-button')
	const formData = new FormData()
	formData.append('file', fileInput.files[0])

	for (const name in sizesData) {
		formData.append(name, sizesData[name])
	}

	return formData
}

async function resizeImage() {
	const URL = '/api/resizeImage'
	const data = getSizesData()

	const response = await fetch(URL, {
		method: 'POST',
		body: getFormData(data),
	})
	const imageData = await response.blob()
	forceDownload(imageData, response.headers)
}

const downloadClickHandler = async () => {
	if (document.querySelector('.dimensions-list-wrapper').checkValidity()) {
		await resizeImage()
	}
}

export { downloadClickHandler }
