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
			<div className='image-preview' />
			<div className='upload-options'>
				<label>
					Browse
					<input type='file' className='upload-image-button' accept='image/*' />
				</label>
			</div>
		</div>
	)
}

export default UploadImage
