import { useState } from 'react'
// import './Size.css'

function Size({ callback: setSizeCallback }) {
	const [inputsCounter, setInputsCounter] = useState(1)
	function addSize() {
		let sizes = document.querySelector('.sizes')
		var html = `<div class='sizes-wrapper'>
            <input class='height-${inputsCounter + 1}' type='number' />
            <input class='height-${inputsCounter + 1}' type='number' />
        </div>`
		sizes.insertAdjacentHTML('beforeend', html)
		setSizeCallback(inputsCounter + 1)
		setInputsCounter(inputsCounter + 1)
	}
	return (
		<div>
			<div>2</div>
			<div>Add sizes</div>

			<div className='sizes'>
				<div className='sizes-wrapper'>
					<input className='height-1' type='number' />
					<input className='width-1' type='number' />
				</div>
			</div>
			<button onClick={addSize}>Añadir tamaño</button>
		</div>
	)
}

export default Size
