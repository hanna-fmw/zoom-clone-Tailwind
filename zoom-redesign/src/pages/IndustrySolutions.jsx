import React from 'react'
import IndustrySolutionsBox from '../components/IndustrySolutionsBox'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { TbBuildingBank } from 'react-icons/tb'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { TbPackage } from 'react-icons/tb'
import { GrTag } from 'react-icons/gr'
function IndustrySolutions() {
	return (
		<section
			className='        
        laptop:grid
        laptop:grid-cols-2
        tablet:flex
        tablet:flex-col
        mobile:pl-10
        mobile:pr-10'>
			<div
				className='
            laptop:mt-[4rem]
            laptop:w-[40vw]
            tablet:mt-[4rem]
            tablet:w-[60vw]'>
				<h2
					className='
                laptop:text-3xl
                font-semibold
                laptop:mb-7 
                text-darkText
                mobile:text-2xl
                mobile:mt-8
                mobile:mb-3'>
					Powering organizations across industries and geographies
				</h2>

				<p
					className='
                laptop:mb-6 
                text-gray-700
                mobile:mb-6
                mobile:text-base
                mobile:leading-5'>
					Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and
					everywhere in between.
				</p>

				<a
					href='#'
					className='
						inline-block
                        text-base						
						font-inter
						text-center                      
                        text-dark									
						bg-greenPillButton
                        rounded-full						
						hover:bg-greenPillButtonHover
                        cursor-pointer						 
                        laptop:mt-10						
						laptop:pt-3
						laptop:pb-3
						laptop:pl-[1.875rem]
						laptop:pr-[1.875rem]
                        laptop:tracking-[0.42px]                        
                        mobile:mb-[3.125rem]
						mobile:mr-[1.25rem]
						mobile:pt-2
						mobile:pb-2
						mobile:pl-3
						mobile:pr-3
                        mobile:text-sm'>
					Explore Industry Solutions
				</a>
			</div>
			<aside
				className='                
                laptop:grid
                laptop:grid-cols-2                
                laptop:gap-x-4
                laptop:w-[50vw]
                laptop:h-[50vh]
                laptop:mt-[6rem]
                tablet:hidden   
                mobile:flex
                mobile:flex-col
                mobile:items-center'>
				<IndustrySolutionsBox title={'Education'} icon={<HiOutlineAcademicCap />} />
				<IndustrySolutionsBox title={'Financial Services'} icon={<AiOutlineDollarCircle />} />
				<IndustrySolutionsBox title={'Government'} icon={<TbBuildingBank />} />
				<IndustrySolutionsBox title={'Healthcare'} icon={<MdOutlineMedicalServices />} />
				<IndustrySolutionsBox title={'Manufacturing'} icon={<TbPackage />} />
				<IndustrySolutionsBox title={'Retail'} icon={<GrTag />} />
			</aside>
			<aside
				className='
                laptop:hidden
                mobile:hidden
                tablet:flex
                justify-center
                flex-wrap
                gap-2'>
				<IndustrySolutionsBox title={'Education'} icon={<HiOutlineAcademicCap />} />
				<IndustrySolutionsBox title={'Financial Services'} icon={<AiOutlineDollarCircle />} />
				<IndustrySolutionsBox title={'Government'} icon={<TbBuildingBank />} />
				<IndustrySolutionsBox title={'Healthcare'} icon={<MdOutlineMedicalServices />} />
				<IndustrySolutionsBox title={'Manufacturing'} icon={<TbPackage />} />
				<IndustrySolutionsBox title={'Retail'} icon={<GrTag />} />
			</aside>
		</section>
	)
}

export default IndustrySolutions
