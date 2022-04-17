import { useState, useEffect, useContext } from 'react'
import DimensionsContext, { DimensionsContextProvider } from './context/DimensionsContext'

import UploadImage from './components/UploadImage'
import DimensionList from './components/DimensionList'
import DownloadButton from './components/DownloadButton/DownloadButton'

import './App.css'

function App() {
	const { areDimensionsEnabled } = useContext(DimensionsContext)
	const [data, setData] = useState(null)
	const [size, setSize] = useState(0)
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
				<DimensionsContextProvider>
					<UploadImage />
					<div className='w-1/2'>
						<DimensionList callback={setSizeCallback} />
						<DownloadButton />
					</div>
				</DimensionsContextProvider>
			</section>
		</div>
	)
}

export default App
