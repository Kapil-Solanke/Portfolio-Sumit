import React from 'react'
export const Navbar = () => {
  return (
    <div className=' flex max-[600px]:flex-col w-11/12 m-auto min-h-fit justify-around items-center py-4'>
        <a href='/' className=' flex gap-1 text-2xl '>
            <div className='text-[#5C3890] font-thin'>Sumit</div>
            <div className="font-bold">Gaurav</div>
        </a>
        <div className='flex max-[600px]:w-full w-[70%] max-[420px]:text-xs justify-between items-center'>
            <a href='/' className=' hover:text-[#FF7A2F] transition-all'>Home</a>
            <a href='#about' className=' hover:text-[#FF7A2F] transition-all'>About</a>
            <a href={'#projects'} className=' hover:text-[#FF7A2F] transition-all'>Projects</a>
            <a href={'#offerings'} className=' hover:text-[#FF7A2F] transition-all'>Skills</a>
            <a href='#contact' className='bg-[#5C3890] rounded-md max-[420px]:px-2 max-[400px]:text-xs px-8 py-2 text-white'>
                <button>Let's Talk</button>
            </a>
        </div>
    </div>
  )
}
