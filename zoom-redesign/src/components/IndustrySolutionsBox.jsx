import React from 'react'

function IndustrySolutionsBox({ title, icon }) {
	return (
		<section
			className='
            flex flex-col
            items-center              
            justify-center            
            laptop:text-[1.4rem]            
            tablet:laptop:text-[1.2rem]            
            mobile:text-[1.2rem]
            mobile:w-[16rem]
            mobile:h-[6rem]
            mobile:mb-4            
            font-bold
            border-thinBlueBorder
            border
            rounded-2xl
            hover:text-zoomBlue
            hover:border-zoomBlue
            hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)]
            hover:shadow-zoomBlue
            cursor-pointer
            '>
			<span>{icon}</span>
			<span>{title}</span>
		</section>
	)
}

export default IndustrySolutionsBox
