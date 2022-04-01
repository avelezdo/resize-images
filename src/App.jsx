import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage'
import './App.css'

function App() {
	async function resizeImage() {
		const URL = '/api/resizeImage'
		let sizes = [{ height: 200, width: 200 }]
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
				<div>
					<div>2</div>
					<div>Add sizes</div>

					<div>
						<input type='text' />
						<input type='text' />
					</div>
				</div>
				<div>
					<div>3</div>
					<button onClick={resizeImage}>Download</button>
				</div>
			</section>
		</div>
	)
}

export default App
