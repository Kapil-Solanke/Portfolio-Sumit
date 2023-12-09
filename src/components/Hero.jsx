import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import Git from '../assets/git.jpg'
export const Hero = () => {
  return (
    <div className='flex max-md:flex-col w-11/12 max-md:items-center max-md:justify-center justify-center mx-auto my-20  '>
        <div className='flex flex-col gap-10 p-2 w-[40%] max-md:w-full'>
            <div className=' text-5xl max-[1200px]:text-4xl font-bold '>
            I’m Sumit Gaurav <span className='text-[#FF7A2F]'>UI/UX</span> Designer 
            </div>
            <div className='text-[#767676] text-md font-normal'>
            Creating Accessible and Intuitive Designs. Passionate about Problem Solving and Redesigning Existing Websites for Enhanced User Experience.
            </div>
            <a href='#contact' className='flex bg-[#5C3890] gap-1 w-[30%] py-2 items-center justify-center rounded-md text-[#F5F5F7] text-sm'>
                <div>Hire Me</div>
                <div><FiArrowRight/></div>
            </a>
        </div>
        <div className='w-[20%] max-md:w-1/2 max-md:h-[300px]  relative flex justify-center items-center'>
            <img src={Git} alt="HeroImage" className='absolute z-10 rounded-full max-md:w-2/3 min-w-[200px]' />
            <div className='absolute top-0 left-0 max-[1100px]:top-10 max-md:top-16 max-md:left-5  h-[140px] w-[140px]  rounded-full bg-[#FF7A2F]'>

            </div>
        </div>
    </div>
  )
}
