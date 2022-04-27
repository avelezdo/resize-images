import { useState } from 'react'
import { DimensionsContextProvider } from './context/DimensionsContext'
import { DownloadButtonContextProvider } from './context/DownloadButtonContext'

import UploadImage from './components/UploadImage/UploadImage'
import DimensionList from './components/DimensionList/DimensionList'
import DownloadButton from './components/DownloadButton/DownloadButton'

import './App.css'

function App() {
	const [_, setSize] = useState(0)
	function setSizeCallback(size) {
		setSize(size)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='bg-orange relative w-full'>
					<img className='oh hidden xl:block' src='./oh-complete.webp' alt='Weight is also reduced!' />
				</div>
				<img className='resize-me' src='./resize_me.png' alt='Resize me!' />
			</header>
			<section>
				<DimensionsContextProvider>
					<DownloadButtonContextProvider>
						<UploadImage />
						<div className='w-1/2'>
							<DimensionList callback={setSizeCallback} />
							<DownloadButton />
						</div>
					</DownloadButtonContextProvider>
				</DimensionsContextProvider>
			</section>
		</div>
	)
}

export default App
