import { useContext } from 'react'
import DimensionsContext from '../context/DimensionsContext'

function Dimensions({ dimensionsCounter }) {
	const { areDimensionsEnabled, setDimensionsEnabled } = useContext(DimensionsContext)
	return (
		<form className='dimensions-list-wrapper'>
			<div className='size'>
				<label htmlFor={`width-${dimensionsCounter}`}>Width</label>
				<div className='relative'>
					<input className={`width-${dimensionsCounter} w-full`} type='number' disabled={!areDimensionsEnabled} required />
					<span className='unit'>px</span>
				</div>
			</div>
			<div className='size'>
				<label htmlFor={`height-${dimensionsCounter}`}>Height</label>
				<div className='relative'>
					<input className={`height-${dimensionsCounter} w-full`} type='number' disabled={!areDimensionsEnabled} required />
					<span className='unit'>px</span>
				</div>
			</div>
		</form>
	)
}

export default Dimensions
