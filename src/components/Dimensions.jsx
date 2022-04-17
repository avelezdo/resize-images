import { useContext } from 'react'
import DimensionsContext from '../context/DimensionsContext'

function Dimensions({ dimensionsCounter }) {
	const { areDimensionsEnabled, setDimensionsEnabled } = useContext(DimensionsContext)
	return (
		<div className='dimensions-list-wrapper'>
			<div className='size'>
				<label htmlFor={`width-${dimensionsCounter}`}>Width</label>
				<div className='relative'>
					<input className={`width-${dimensionsCounter} w-full`} type='number' disabled={!areDimensionsEnabled} />
					<span className='unit'>px</span>
				</div>
			</div>
			<div className='size'>
				<label htmlFor={`height-${dimensionsCounter}`}>Height</label>
				<div className='relative'>
					<input className={`height-${dimensionsCounter} w-full`} type='number' disabled={!areDimensionsEnabled} />
					<span className='unit'>px</span>
				</div>
			</div>
		</div>
	)
}

export default Dimensions
