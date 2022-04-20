import { useContext } from 'react'
import DimensionsContext from '../context/DimensionsContext'

function Dimensions({ dimensionsCounter, callback }) {
	const { areDimensionsEnabled } = useContext(DimensionsContext)
	const changeWidthHandler = (event) => {
		const dimensionCounter = event.target.dataset.dimensionsCounter
		const heightInput = document.querySelector(`.height-${dimensionCounter}`)
		callback(event.target.value && heightInput.value)
	}

	const changeHeightHandler = (event) => {
		const dimensionCounter = event.target.dataset.dimensionsCounter
		const widthInput = document.querySelector(`.width-${dimensionCounter}`)
		callback(event.target.value && widthInput.value)
	}

	return (
		<form className='dimensions-list-wrapper'>
			<div className='size'>
				<label htmlFor={`width-${dimensionsCounter}`}>Width</label>
				<div className='relative'>
					<input
						className={`width-${dimensionsCounter} w-full`}
						type='number'
						onChange={changeWidthHandler}
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
						onChange={changeHeightHandler}
						data-dimensions-counter={dimensionsCounter}
						disabled={!areDimensionsEnabled}
						required
					/>
					<span className='unit'>px</span>
				</div>
			</div>
		</form>
	)
}

export default Dimensions
