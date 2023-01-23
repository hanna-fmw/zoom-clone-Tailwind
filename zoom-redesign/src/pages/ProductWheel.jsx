import React from 'react'
import zoomWheel from '../assets/zoomWheel.png'

function ProductWheel() {
	return (
		<>
			<section
				className='
			w-full
			laptop:flex
			laptop: items-center
			laptop: justify-between 
			bg-darkBlueBg
			laptop:h-[55vh]
			laptop:pl-20
			laptop:pr-8
			laptop:gap-[60px]	
			tablet:mt-[4rem]		
			mobile:h-[80vh]
			mobile:pl-7
			mobile:pr-7
			mobile:pt-3
			mobile:pb-5
			mobile:mt-8 '>
				<div>
					<img
						src={zoomWheel}
						className='
					laptop:w-[560px]	
					tablet:pt-4
					mobile:w-[300px]
					mobile:mx-auto
					mobile:pb-6'
						alt='Product Wheel'
					/>
				</div>
				<div
					className='
				flex
				flex-col 
				text-lightGreyText
				mobile:mb-4'>
					<h2
						className='
					laptop:text-4xl
					font-semibold
					laptop:mb-7
					mobile:text-2xl
					mobile:mb-4'>
						Make work less work
					</h2>
					<p
						className='
					laptop:mb-6
					mobile:mb-8'>
						Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern
						workforce.
					</p>
					<a
						href='#'
						className='
					underline
					decoration-1
					underline-offset-8
					hover:font-semibold'>
						Discover the Possibilities&nbsp;&nbsp;&gt;
					</a>
				</div>
			</section>
		</>
	)
}

export default ProductWheel
