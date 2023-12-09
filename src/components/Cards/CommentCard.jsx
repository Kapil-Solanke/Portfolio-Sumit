import React from 'react'
import i1 from '../../assets/icons/i1.jpg'
import { FaHeart } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export const CommentCard = () => {
    return (
        <div className=' flex flex-col mx-auto gap-1 rounded-md w-11/12 p-8 shadow-[3px_3px_10px_#565656]'>
            <div className='text-3xl'><BiSolidQuoteAltLeft/></div>
            <div className='text-[#767676] text-sm'>Sumit's creativity have transformed our website into a user-friendly and visually appealing platform. Throughout the entire process, Sumit demonstrated exceptional communication skills and was always open to feedback and suggestions. I highly recommend Sumit for any UI/UX design project. He is a talented and dedicated professional who is committed to delivering outstanding result.</div>
            <div className='flex justify-between items-center max-[330px]:flex-col max-[330px]:gap-4'>
                <div className='flex items-center'>
                    <div className='w-10 rounded-full'><img src={i1} alt="" /></div>
                    <div className='flex flex-col'>
                        <div className='text-[#5C3890] text-md max-[400px]:text-xs font-bold'>Vishal Sharma</div>
                        <div className='text-[#767676] text-xs max-[400px]:text-[8px]'>CEO at Techmatica Software Pvt. Ltd.</div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div><FaHeart className=' text-red-400'/></div>
                    <div className='text-[#767676] text-xs'>4.2/5</div>
                </div>
            </div>
        </div>
    )
}
