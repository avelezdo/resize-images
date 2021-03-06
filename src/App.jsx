import { useState } from 'react'
import { DimensionsContextProvider } from './context/DimensionsContext'
import { DownloadButtonContextProvider } from './context/DownloadButtonContext'

import UploadImage from './components/UploadImage/UploadImage'
import DimensionList from './components/DimensionList/DimensionList'
import DownloadButton from './components/DownloadButton/DownloadButton'
import Footer from './components/Footer/Footer'

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
					<img className='wow hidden xl:block' src='./wow.png' alt='Wow!' />
				</div>
				<img className='resize-me' src='./resize_me.png' alt='Resize me!' />
			</header>
			<section className='flex-col items-center min-w-[460px] w-[460px] md:flex-row md:min-w-[720px] lg:min-w-[940px]'>
				<DimensionsContextProvider>
					<DownloadButtonContextProvider>
						<UploadImage />
						<div className='w-full'>
							<DimensionList callback={setSizeCallback} />
							<DownloadButton />
						</div>
					</DownloadButtonContextProvider>
				</DimensionsContextProvider>
			</section>
			<Footer></Footer>
		</div>
	)
}

export default App
