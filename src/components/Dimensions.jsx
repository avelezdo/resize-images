function Dimensions({ dimensionsCounter, callback: removeDimensionsCallback }) {
	return (
		<div className='sizes-wrapper'>
			{dimensionsCounter > 1 && (
				<button onClick={removeDimensionsCallback}>
					<svg xmlns='http://www.w3.org/2000/svg' version='1.2' viewBox='0 0 13 13' width='13' height='13'>
						<g id='Layer'>
							<path
								id='Layer'
								fillRule='evenodd'
								fill='currentColor'
								d='m13 6.5c0 1.7-0.7 3.4-1.9 4.6-1.2 1.2-2.9 1.9-4.6 1.9-1.7 0-3.4-0.7-4.6-1.9-2.5-2.5-2.5-6.7 0-9.2 1.2-1.2 2.9-1.9 4.6-1.9 1.7 0 3.4 0.7 4.6 1.9 1.2 1.2 1.9 2.9 1.9 4.6zm-1.2 0c0-1.4-0.5-2.8-1.5-3.8-1-1-2.4-1.5-3.8-1.5-1.4 0-2.8 0.5-3.8 1.5-2 2.1-2 5.5 0 7.6 1 1 2.4 1.5 3.8 1.5 1.4 0 2.8-0.5 3.8-1.5 1-1 1.5-2.4 1.5-3.8z'
							/>
							<path
								id='Layer'
								fill='currentColor'
								d='m10.6 6.5c0 0.3-0.2 0.6-0.6 0.6h-7c-0.4 0-0.6-0.3-0.6-0.6 0-0.3 0.2-0.6 0.6-0.6h7c0.4 0 0.6 0.3 0.6 0.6z'
							/>
						</g>
					</svg>
				</button>
			)}
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
