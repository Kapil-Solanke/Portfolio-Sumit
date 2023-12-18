import React from 'react'
import { OfferingsCard } from './Cards/OfferingsCard'
import i1 from '../assets/icons/i1.jpg'
import i2 from '../assets/icons/i2.jpg'
import i3 from '../assets/icons/i3.jpg'
import i4 from '../assets/icons/i4.jpg'
import i5 from '../assets/icons/i5.jpg'

export const Offerings = () => {
  return (
    <div className=' text-center my-20' id='offerings'>
        <div className='text-[#FF7A2F] text-md font-bold'>MY OFFERINGS</div>
        <div className='text-xl font-bold'>The impressive services only for you</div>
        <div className='text-[#767676] text-sm max-md:text-xs max-md:w-11/12 w-[50%] m-auto'>Customized industry solutions utilizing diverse skills and software expertise for all clients.</div>

        <div className='grid grid-cols-3 max-md:grid-cols-1  gap-6 max-md:gap-0  w-3/4  m-auto'>
        {/* <div className='flex flex-wrap gap-6  w-3/4  m-auto'> */}
          <OfferingsCard icon={i1} text={"Web Design"} para={"I specialize in responsive web design, emphasizing exceptional user experiences through UI/UX, usability testing, and iterative improvements."}/>
          <OfferingsCard icon={i2} text={"UI/UX Design"} para={"I design digital products that requires attention to UI/UX, involving user flow analysis, wireframing, prototyping, mobile app design and usability testing."}/>
          <OfferingsCard icon={i3} text={"Graphic Design"} para={"I craft visual content using Photoshop and Canva to effectively communicate ideas and generate awareness about your services also attracting sales."}/>
          <OfferingsCard icon={i4} text={"Branding"} para={"I specialize in various steps of brand designing starting from initial design statement like logo design, social media kit design, design system for consistency in design."}/>
          <OfferingsCard icon={i5} text={"Low code webdev"} para={"I create websites using Webflow that are entirely responsive, dynamic, and fully customized.  I offer ongoing support and service even after the website is handed over."}/>
          <OfferingsCard icon={i5} text={"UX Research"} para={"I craft visual content using Photoshop and Canva to effectively communicate ideas and generate awareness about your services also attracting sales."}/>
        </div>
    </div>
  )
}
