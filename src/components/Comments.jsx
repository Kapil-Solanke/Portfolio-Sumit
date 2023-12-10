import React from 'react'
import { CommentCard } from './Cards/CommentCard'

export const Comments = () => {
    return (
        <div className='flex max-md:flex-col justify-between w-3/4 max-[300px]:w-11/12 m-auto' id='comments'>
            <div className='flex flex-col  justify-center gap-2 w-[40%] max-md:w-11/12'>
                <div className='text-[#FF7A2F] text-base font-bold'>Comments</div>
                <div className=' text-3xl font-bold max-md:text-2xl max-[500px]:text-xl'>Hear what happy clients are saying about my work.</div>
                <div className='text-[#767676] text-sm max-md:text-xs'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
            </div>
            <div className='w-[60%] flex flex-col max-md:w-11/12 gap-8 max-md:mt-10'>
                <CommentCard/>
                <CommentCard/>
            </div>
        </div>
    )
}
