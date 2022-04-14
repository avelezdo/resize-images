function Dimensions({ dimensionsCounter }) {
	return (
		<div className='sizes-wrapper'>
			<div className='size'>
				<label htmlFor={`width-${dimensionsCounter}`}>Width</label>
				<div className='relative'>
					<input className={`width-${dimensionsCounter} w-full`} type='number' />
					<span className='unit'>px</span>
				</div>
			</div>
			<div className='size'>
				<label htmlFor={`height-${dimensionsCounter}`}>Height</label>
				<div className='relative'>
					<input className={`height-${dimensionsCounter} w-full`} type='number' />
					<span className='unit'>px</span>
				</div>
			</div>
		</div>
	)
}

export default Dimensions
