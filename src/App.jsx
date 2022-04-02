import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage'
import Size from './components/Size'
import './App.css'

function App() {
	async function resizeImage() {
		const URL = '/api/resizeImage'
		let sizes = [...document.querySelectorAll('.sizes-wrapper')].map((sizesWrapper) => {
			return {
				height: Number(sizesWrapper.children[0].value),
				width: Number(sizesWrapper.children[1].value),
			}
		})
		const data = {
			name: 'file',
			sizes: JSON.stringify(sizes),
		}
		const fileInput = document.querySelector('.image-upload')
		const formData = new FormData()

		formData.append('file', fileInput.files[0])

		for (const name in data) {
			formData.append(name, data[name])
		}

		const response = await fetch(URL, {
			method: 'POST',
			body: formData,
		})
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
