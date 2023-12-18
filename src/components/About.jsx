import React from 'react'
import AboutImage from '../assets/about.jpg'
import ExamplePdf from '../assets/Kapil_CV.pdf'
export const About = () => {
  return (
    <div className='flex  justify-center m-auto my-40  ' id='about'>
      <div className='w-[20%] max-[500px]:hidden min-w-[200px] flex justify-center items-center'>
        <img src={AboutImage} alt="AboutImage" />
      </div>
      <div className='flex flex-col gap-5 max-[500px]:w-11/12 max-[500px]:items-center w-[40%]'>
        <div className=' text-3xl  font-bold text-[#FF7A2F]'>
          About Me
        </div>
        <div className='text-[#767676] text-base max-md:text-sm font-normal'>
          I have expertise in Figma, Adobe XD, and Adobe Creative Suite (Photoshop, Illustrator and Indesign). With a strong background in graphic design, UX prototyping, and wireframing, I specialize in crafting solution-driven UI designs, adaptable systems, and responsive multi-screen interfaces.
        </div>
        <a href={ExamplePdf}
          download="My_Resume"
          target="_blank"
          rel="noreferrer" className='flex bg-[#5C3890] gap-1 w-[30%] min-w-[150px] py-2 items-center justify-center rounded-md text-[#F5F5F7] text-sm'>
          <div>Download CV</div>
        </a>
      </div>
    </div>
  )
}
