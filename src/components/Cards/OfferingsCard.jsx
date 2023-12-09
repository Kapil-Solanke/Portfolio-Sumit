import React from 'react'

export const OfferingsCard = ({icon,text,para}) => {
  return (
    <div className='flex my-10 mx-auto px-8 max-[1100px]:px-4 flex-col max-w-[300px] min-h-[300px] rounded-md shadow-[3px_3px_10px_#565656] text-center justify-center gap-4 items-center'>
      <div>
        <img src={icon} alt="Icon" className='w-20 h-20' />
      </div>
        <div className=' text-lg font-bold'>{text}</div>
        <div className='text-[#565656] text-xs'>{para}</div>
    </div>
  )
}
