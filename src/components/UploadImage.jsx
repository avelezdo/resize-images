import './UploadImage.css'
import { useEffect } from 'react'
import { initImageUploadHandlers } from './UploadImageTools.mjs'

function UploadImage() {
	useEffect(() => {
		initImageUploadHandlers()
	}, [])

	return (
		<div className='box'>
			<div className='js--image-preview'></div>
			<div className='upload-options'>
				<label>
					<input type='file' className='image-upload' accept='image/*' />
				</label>
			</div>
		</div>
	)
}

export default UploadImage
