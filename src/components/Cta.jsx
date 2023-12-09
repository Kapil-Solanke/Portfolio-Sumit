import React from 'react'
import { FiArrowRight } from "react-icons/fi";
export const Cta = () => {
    return (
        <div className='bg-[#132238] w-[100vw] min-h-[300px] gap-8 justify-center text-center flex flex-col items-center '>
            <div className='text-2xl font-bold text-white w-1/3 min-w-[350px] max-[350px]:w-11/12
            max-[350px]:text-xl '>Do you have Project Idia? Let's discuss your project!</div>
            <div className='text-[#A5ACB5] text-sm w-1/3 min-w-[350px] max-[350px]:w-11/12 max-[350px]:text-[90%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</div>
            <a href='#contact' className='flex bg-[#5C3890] gap-1 w-[150px] py-3 items-center justify-center rounded-md text-[#F5F5F7] text-sm max-md:w-[100px] max-md:text-xs'>
                <div>View More</div>
                <div><FiArrowRight /></div>
            </a>
        </div>
    )
}
