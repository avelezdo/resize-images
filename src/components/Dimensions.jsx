import { useContext } from 'react'
import DimensionsContext from '../context/DimensionsContext'

function Dimensions({ dimensionsCounter, callback }) {
	const { areDimensionsEnabled } = useContext(DimensionsContext)

	const changeSizeHandler = (event) => {
		callback(document.querySelector('.dimensions-list-form').checkValidity())
	}

	return (
		<div className='dimensions-list-wrapper'>
			<div className='size'>
				<label htmlFor={`width-${dimensionsCounter}`}>Width</label>
				<div className='relative'>
					<input
						className={`width-${dimensionsCounter} w-full`}
						type='number'
						onChange={changeSizeHandler}
						data-dimensions-counter={dimensionsCounter}
						disabled={!areDimensionsEnabled}
						required
					/>
					<span className='unit'>px</span>
				</div>
			</div>
			<div className='size'>
				<label htmlFor={`height-${dimensionsCounter}`}>Height</label>
				<div className='relative'>
					<input
						className={`height-${dimensionsCounter} w-full`}
						type='number'
						onChange={changeSizeHandler}
						data-dimensions-counter={dimensionsCounter}
						disabled={!areDimensionsEnabled}
						required
					/>
					<span className='unit'>px</span>
				</div>
			</div>
		</div>
	)
}

export default Dimensions
