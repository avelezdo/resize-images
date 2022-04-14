import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage'
import DimensionList from './components/DimensionList'
import './App.css'
import './downloadButton.css'
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
				<img className='resize-me' src='/src/resize_me.png' alt='' />
				{/* <p>{!data ? 'Loading...' : data}</p> */}
			</header>
			<section>
				<UploadImage></UploadImage>
				<div className='w-1/2'>
					<DimensionList callback={setSizeCallback}></DimensionList>
					<button className='download-button' onClick={resizeImage}>
						Download
					</button>
				</div>
			</section>
		</div>
	)
}

export default App
