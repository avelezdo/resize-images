import { useState } from 'react'
import './DimensionList.css'
import Dimensions from './Dimensions'

function DimensionList() {
	const [dimensionsCounter, setDimensionsCounter] = useState(1)
	const [dimensionList, setDimensionList] = useState([<Dimensions dimensionsCounter={dimensionsCounter} key={0}></Dimensions>])

	const addDimensions = () => {
		setDimensionsCounter((prevState) => prevState + 1)
		setDimensionList((prevState) => {
			const newDimensionList = [...prevState]
			newDimensionList.push(<Dimensions dimensionsCounter={dimensionsCounter} key={dimensionsCounter}></Dimensions>)
			return newDimensionList
		})
	}

	const removeDimensions = () => {
		setDimensionsCounter((prevState) => prevState - 1)
		setDimensionList((prevState) => {
			const newDimensionList = [...prevState]
			newDimensionList.pop()
			return newDimensionList
		})
	}

	return (
		<div className='dimensions-wrapper'>
			{dimensionList}
			<div className='flex justify-start gap-3 sizes-buttons-wrapper'>
				<button type='button' className='plus_add_button' onClick={addDimensions}>
					<span className='add-icon' aria-hidden='true'>
						<svg width='13' height='13'>
							<path
								d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
								fill='currentColor'
								fillRule='evenodd'></path>
						</svg>
					</span>
					Add size
				</button>
				{dimensionsCounter > 1 && <span className='font-thin self-center'> | </span>}
				{dimensionsCounter > 1 && (
					<button className='remove-size' onClick={removeDimensions}>
						<span className='remove-icon'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 13' width='13' height='13'>
								<g id='minus-icon'>
									<path
										id='minus-icon'
										d='m13 6.5c0 0.6-0.5 1.1-1.2 1.1h-10.7c-0.3 0-0.6-0.1-0.8-0.3-0.2-0.2-0.3-0.5-0.3-0.8 0-0.6 0.5-1.1 1.1-1.1h10.7c0.7 0 1.2 0.5 1.2 1.1z'
										fill='currentColor'
										fillRule='evenodd'
									/>
								</g>
							</svg>
						</span>
						Remove size
					</button>
				)}
			</div>
		</div>
	)
}

export default DimensionList
