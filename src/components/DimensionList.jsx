import { useState } from 'react'
import './DimensionList.css'
import Dimensions from './Dimensions'

function DimensionList() {
	const [dimensionsCounter, setDimensionsCounter] = useState(1)
	const [dimensionList, setDimensionList] = useState([<Dimensions dimensionsCounter={dimensionsCounter} callback={removeDimensionsCallback}></Dimensions>])

	function removeDimensionsCallback() {
		setDimensionsCounter(dimensionsCounter)
		setDimensionList(dimensionList)
	}

	const addDimensions = (_) => {
		setDimensionsCounter(dimensionsCounter + 1)
		setDimensionList(dimensionList.concat(<Dimensions dimensionsCounter={dimensionsCounter + 1} callback={removeDimensionsCallback}></Dimensions>))
	}

	//se debería capturar el evento de removeDimensions que se produce en el hijo

	return (
		<div className='dimensions-wrapper'>
			{dimensionList}
			<button type='button' data-add-task-navigation-element='true' className='plus_add_button' onClick={addDimensions}>
				<span className='icon_add' aria-hidden='true'>
					<svg width='13' height='13'>
						<path
							d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
							fill='currentColor'
							fillRule='evenodd'></path>
					</svg>
				</span>
				Añadir tamaño
			</button>
		</div>
	)
}

export default DimensionList
