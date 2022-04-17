import { useContext } from 'react'
import DimensionsContext from '../../context/DimensionsContext'
import { downloadClickHandler } from '../../AppUtils'

import './DownloadButton.css'

export default function DownloadButton() {
	const { areDimensionsEnabled } = useContext(DimensionsContext)

	return (
		<button className='download-button' onClick={downloadClickHandler} disabled={!areDimensionsEnabled}>
			Download
		</button>
	)
}
