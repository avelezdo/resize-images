import { useContext } from 'react'
import DownloadButtonContext from '../../context/DownloadButtonContext'
import { downloadClickHandler } from '../../AppUtils'

import './DownloadButton.css'

export default function DownloadButton() {
	const { isDownloadButtonEnabled } = useContext(DownloadButtonContext)

	return (
		<button className='download-button' onClick={downloadClickHandler} disabled={!isDownloadButtonEnabled}>
			Download
		</button>
	)
}
