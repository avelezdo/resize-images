import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage'
import Size from './components/Size'
import './App.css'

function App() {
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

	const [data, setData] = useState(null)
	let [size, setSize] = useState(0)
	function setSizeCallback(size) {
		setSize(size)
	}
	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => {
				setData(data.message)
			})
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				<p>{!data ? 'Loading...' : data}</p>
			</header>
			<section>
				<UploadImage></UploadImage>
				<Size callback={setSizeCallback}></Size>
				<div>
					<div>3</div>
					<button onClick={resizeImage}>Download</button>
				</div>
			</section>
		</div>
	)
}

export default App
