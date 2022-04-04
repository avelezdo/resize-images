function forceDownload(imageData, headers) {
	let anchor = document.createElement('a')
	document.querySelector('section').appendChild(anchor)
	const url = window.URL.createObjectURL(imageData)
	anchor.href = url
	anchor.download = headers.get('content-disposition').split('filename=')[1]
	anchor.click()
	window.URL.revokeObjectURL(url)
	document.querySelector('section').removeChild(anchor)
}

function getSizesData() {
	let sizes = [...document.querySelectorAll('.sizes-wrapper')].map((sizesWrapper) => {
		return {
			height: Number(sizesWrapper.children[0].value),
			width: Number(sizesWrapper.children[1].value),
		}
	})

	return {
		name: 'file',
		sizes: JSON.stringify(sizes),
	}
}

function getFormData(sizesData) {
	const fileInput = document.querySelector('.image-upload')
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

export { resizeImage }
