import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage'
import Size from './components/Size'
import './App.css'
import { resizeImage } from './AppUtils'

function App() {
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
				<div className='w-1/2'>
					<Size callback={setSizeCallback}></Size>
					<button className='rounded-full bg-black' onClick={resizeImage}>
						Download
					</button>
				</div>
			</section>
		</div>
	)
}

export default App
