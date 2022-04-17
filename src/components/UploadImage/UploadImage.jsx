import './UploadImage.css'
import { useEffect, useContext } from 'react'
import { initImageUploadHandlers } from './UploadImageUtils.mjs'
import DimensionsContext from '../../context/DimensionsContext'

function UploadImage() {
	const { setDimensionsEnabled } = useContext(DimensionsContext)

	function enableDimensionsSection() {
		setDimensionsEnabled(true)
	}

	useEffect(async () => {
		initImageUploadHandlers(enableDimensionsSection)
	}, [])

	return (
		<div className='box w-1/2'>
			<div className='js--image-preview' />
			<div className='upload-options'>
				<label>
					<input type='file' className='image-upload' accept='image/*' />
				</label>
			</div>
		</div>
	)
}

export default UploadImage
