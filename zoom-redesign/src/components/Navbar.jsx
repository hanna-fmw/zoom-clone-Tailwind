import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCaretDown } from 'react-icons/rx'

function Navbar() {
	const [isShown, setIsShown] = useState(false)
	return (
		<nav>
			<section
				className='
			mobile:hidden
			laptop:flex
			tablet:flex
			justify-between			
			items-baseline
			laptop:pl-[3.75rem]
			laptop:pr-[3.75rem]
			tablet:pl-[2.75rem]
			tabletpl-[2.75rem]

			leading-5'>
				<div
					className='
				laptop:flex
				laptop:space-x-8
				tablet:flex
				tablet:space-x-4
				tablet:mr-6
				mt-12'>
					<div>
						<a href='https://zoom.us/'>
							<img
								src='https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg'
								className='
								object-scale-down
								-translate-y-1'
								alt='Zoom Logo'
							/>
						</a>
					</div>

					<ul
						className='
					flex					
					leading-5					
					space-x-5 
					text-navLinkColor										
					'>
						<li>
							<a
								href='#'
								className='			
								laptop:text-base
								tablet:text-sm					
								hover:text-zoomBlue
								cursor-pointer
								inline-block'
								onMouseOver={() => setIsShown(true)}
								onMouseLeave={() => setIsShown(false)}>
								{!isShown ? (
									'Products'
								) : (
									<span
										className='
									inline-flex'>
										Products
										<RxCaretDown />
									</span>
								)}
							</a>
						</li>
						<li>
							<a
								href='#'
								className='
								laptop:text-base
								tablet:text-sm
							  hover:text-zoomBlue
							  	cursor-pointer
							  	inline-block'
								onMouseEnter={() => setIsShown(true)}
								onMouseLeave={() => setIsShown(false)}>
								{!isShown ? (
									'Solutions'
								) : (
									<span
										className='
									inline-flex'>
										Solutions
										<RxCaretDown />
									</span>
								)}
							</a>
						</li>
						<li>
							<a
								href='#'
								className='
								laptop:text-base
								tablet:text-sm
								hover:text-zoomBlue
								cursor-pointer
								inline-block'
								onMouseEnter={() => setIsShown(true)}
								onMouseLeave={() => setIsShown(false)}>
								{!isShown ? (
									'Resources'
								) : (
									<span
										className='
									inline-flex'>
										Resources
										<RxCaretDown />
									</span>
								)}
							</a>
						</li>
						<li>
							<a
								href='#'
								className='
							laptop:text-base
							tablet:text-sm						
							hover:text-zoomBlue
							cursor-pointer'>
								Plans & Pricing
							</a>
						</li>
					</ul>
				</div>

				<ul
					className='
				flex
				-translate-y-5'>
					<li>
						<a
							href='#'
							className='
						inline-block
						font-inter
						text-center
						border
						box-border
						rounded-full						
						laptop:tracking-[0.42px]
						text-zoomBlue 
						border-zoomBlue						
						bg-white 
						hover:bg-hoverLightBlue
						laptop:font-semibold						
						laptop:text-sm
						laptop:mt-[0.625rem]
						laptop:ml-[0.25rem]
						laptop:mb-[0.25rem]
						laptop:mr-[0.25rem]
						laptop:pt-[0.5rem]
						laptop:pb-[0.5rem]
						laptop:pl-[1.125rem]
						laptop:pr-[1.125rem]
						tablet:mr-3
						tablet:pt-1
						tablet:pb-1
						tablet:pl-2
						tablet:pr-2
						tablet:text-xs
						tablet:font-semibold'>
							Contact Sales
						</a>
					</li>
					<li>
						<a
							href='#'
							className='
						inline-block
						font-inter
						text-center
						border
						box-border
						rounded-full						
						tracking-[0.42px]
						text-zoomBlue 
						border-zoomBlue						
						bg-white 
						hover:bg-hoverLightBlue
						laptop:font-semibold						
						laptop:text-sm
						laptop:mt-[0.625rem]
						laptop:ml-[0.25rem]
						laptop:mb-[0.25rem]
						laptop:mr-[0.25rem]
						laptop:pt-[0.5rem]
						laptop:pb-[0.5rem]
						laptop:pl-[1.125rem]
						laptop:pr-[1.125rem]
						tablet:mr-3
						tablet:pt-1
						tablet:pb-1
						tablet:pl-2
						tablet:pr-2
						tablet:text-xs
						tablet:font-semibold'>
							Sign Up Free
						</a>
					</li>
				</ul>
			</section>

			<section
				className='
			mobile:block
			laptop:hidden
			tablet:hidden
			relative m-8'>
				<a
					href='https://zoom.us/'
					className='
				absolute
				top-0
				left-0'>
					<img
						src='https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg'
						className='
						object-scale-down
						laptop:-translate-y-1'
						alt='Zoom Logo'
					/>
				</a>

				<ul
					className='
				flex
				justify-end
				space-x-3
				items-center'>
					<li
						className='text-base
					hover:text-zoomBlue
					cursor-pointer
					inline-block'>
						Join
					</li>
					<li
						className='
					text-base
					hover:text-zoomBlue
					cursor-pointer
					inline-block'>
						Host
					</li>
					<li>{<GiHamburgerMenu />}</li>
				</ul>
			</section>
		</nav>
	)
}

export default Navbar
