import React from 'react'

export const ProcessCard = ({reverse,num,head,para,left}) => {
  return (
    <div className={`flex ${reverse?" flex-row-reverse":""} my-4 max-[550px]:flex-col justify-center items-center w-3/4 mx-auto`}>
        <div className='w-1/2 max-[550px]:w-full flex flex-col gap-4'>
            <div className='text-[#5C3890] text-5xl font-bold'>{num}.</div>
            <div className='text-3xl font-bold'>{head}</div>
            <div className='text-[#767676] text-sm max-md:text-xs'>{para}</div>
        </div>
        <div className='w-1/2 max-[550px]:w-full  flex items-center justify-center my-auto'>
            {!left&&<div className='w-[300px] h-[300px]  flex items-center justify-start'>
                <div className='h-[200px] w-[100px] relative translate-x-24 bg-[#FF7A2F] rounded-r-full  '>   
                <div className='h-[180px] w-[180px] absolute top-[5%] left-[5%] z-10 bg-[#D9D9D9] rounded-full -translate-x-24'></div>
                </div>
            </div>}
            {left&&<div className='w-[300px] h-[300px] flex items-center justify-start'>
                <div className='h-[200px] w-[100px] relative  bg-[#FF7A2F] rounded-l-full  '>   
                <div className='h-[180px] w-[180px] absolute top-[5%] left-[5%] z-10 bg-[#D9D9D9] rounded-full translate-x-[5px] '></div>
                </div>
            </div>}
        </div>
    </div>
  )
}
