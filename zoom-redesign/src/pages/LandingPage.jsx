import React, { useState } from 'react'
import { RxCaretRight } from 'react-icons/rx'
import zoomMeeting from '../assets/zoomMeeting.jpg'

function LandingPage() {
	const [isShown, setIsShown] = useState(false)
	return (
		<section
			className='
		laptop:grid
		laptop:grid-cols-2
		laptop:grid-flow-row
		laptop:ml-[40px]
		laptop:h-[85vh]
		laptop:w-full
		tablet:flex
		tablet:flex-col
		tablet:justify-content
		tablet:items-center
		mobile:ml-7'>
			<main
				className='
				laptop:flex
				laptop:flex-col
				laptop:ml-[3.75rem]
				laptop:mr-[3rem]
				laptop:w-[40vw]
				tablet:flex
				tablet:flex-col				
				tablet:ml-[3.75rem]
				tablet:mr-[3rem]
				tablet:w-[50vw]
				tablet:gap-7'>
				<h1
					className='
				font-bold
				text-darkText
				tracking-widest
				laptop:mt-28
				laptop:leading-[3.5rem]
				laptop:text-[3rem]				
				laptop:mb-[2.2rem]
				tablet:text-[2.5rem]
				tablet:mt-[3rem]
				tablet:mb-[1rem]
				mobile:text-4xl
				mobile:mb-7'>
					One platform <br /> to{' '}
					<span
						className='
					text-zoomBlue text-semibold'>
						innovate
					</span>
				</h1>
				<p
					className='
				laptop:text-xl
				laptop:mb-11
				tablet:text-lg
				tablet:mb-6
				mobile:text-base
				mobile:tracking-tight
				mobile:mb-7'>
					Bring teams together, reimagine workspaces, engage new audiences, and delight your customers &mdash; all on the Zoom platform you know and
					love.
				</p>
				<div
					className='
				laptop:mb-3
				tablet:mb-3
				mobile:mb-7
				'>
					<a
						href='#'
						className='
						inline-block
						border-zoomBlue
						border
						text-white 					
						bg-zoomBlue
						text-base						
						font-inter
						text-center
						tracking-[0.42px]			              
						rounded-full						
						hover:bg-hoverBlue
						mb-[10px]
						mr-[20px]
						laptop:pt-3
						laptop:pb-3
						laptop:pl-[30px]
						laptop:pr-[30px]						
						mobile:text-sm
						mobile:pt-1
						mobile:pb-1
						mobile:pl-3
						mobile:pr-3
					'>
						Plans & Pricing
					</a>

					<a
						href='#'
						className='
						laptop:text-base
						mobile:text-sm
						cursor-pointer
						inline-block
						font-semibold
						text-zoomBlue
						font-inter
						laptop:tracking-[0.42px]'
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}>
						{!isShown ? (
							'Sign Up, It´s Free'
						) : (
							<div
								className='
							flex
							align-baseline
							items-center'>
								<span
									className='
								laptop:mr-2'>
									Sign Up, It´s Free
								</span>
								<span>
									<RxCaretRight />
								</span>
							</div>
						)}
					</a>
				</div>
			</main>
			<div
				className='
			laptop:w-[50vw] 
			laptop:h-[90vh]
			laptop:bg-lightGreyBg			
			'>
				<img
					src={zoomMeeting}
					className='
					laptop:w-[500px]
					laptop:h-[330px]
					laptop:mx-auto
					laptop:translate-y-4
					tablet:w-[400px]
					tablet:h-[264px]
					mobile:w-[70%]										
					rounded-lg
					
					
					'
					alt='meeting'
				/>
			</div>
		</section>
	)
}

export default LandingPage
