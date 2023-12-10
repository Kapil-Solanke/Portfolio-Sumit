import React from 'react'
export const ProjectCard = ({ t1, t2, head,title, para,bottom,list,width }) => {
    return (
        <div className={` max-w-[300px] max-[330px]:w-2/3 mx-auto min-h-[400px] rounded-md shadow-[3px_3px_10px_#565656]`}>
            <div className={`min-h-[200px] bg-[#D9D9D9]`}></div>
            <div className=' flex flex-col min-h-[200px] justify-around gap-1 p-4 '>
                <div className='flex justify-between text-[10px] font-bold text-[#FF7A2F]'>
                    <div>{t1}</div>
                    <div>{t2}</div>
                </div>
                <div className='font-bold text-[#5C3890] text-xs'>{title}</div>
                <div className='font-bold text-lg'>{head}</div>
                <div className='text-[#767676] text-[8px]'>{para}</div>
                {list&&<div className='text-[10px] text-[#8F8F8F]'>
                    <ul className='flex gap-2 max-lg:text-[6px] text-[8px] list-inside  list-disc'>
                        <li>FIGMA</li>
                        <li>GOOGLE FORMS</li>
                        <li>ILLUSTRATOR</li>
                    </ul>
                </div>}
                <div className='font-bold text-sm text-[#5C3890] underline'>
                     {bottom} &#62;
                </div>
            </div>
        </div>
    )
}
