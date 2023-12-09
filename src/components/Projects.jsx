import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { ProjectCard } from './Cards/ProjectCard';
export const Projects = () => {
  return (
    <div className='my-20' id='projects'>
        <div className='text-[#FF7A2F] text-center text-md font-bold'>Portfolio</div>
        <div className='text-xl font-bold text-center'>My Creative works Latest Projects</div>
        <div className='text-[#767676] text-sm max-md:text-xs max-md:w-11/12  text-center w-[50%] m-auto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
        <div className='flex justify-between items-center w-3/4 mt-10 m-auto'>
            <div className='font-bold text-2xl max-[470px]:text-lg text-[#2B2B2B]'>UX Case Study</div>
            <div className='flex bg-[#5C3890] gap-1 w-[150px] max-md:w-[100px] max-md:text-xs py-3 items-center justify-center rounded-md text-[#F5F5F7] text-sm'>
                <div>View More</div>
                <div><FiArrowRight/></div>
            </div>
        </div>
        <div className='grid grid-cols-3 max-md:grid-cols-1 my-10  gap-6 w-3/4  m-auto'>
            <ProjectCard t1={"CASE STUDY #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"READ FULL CASE STUDY"}
            list={true} width={"300px"}/>
            <ProjectCard t1={"CASE STUDY #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"READ FULL CASE STUDY"}
            list={true} width={"300px"}/>
            <ProjectCard t1={"CASE STUDY #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"READ FULL CASE STUDY"}
            list={true} width={"300px"}/>
        </div>
        <div className='flex justify-between items-center w-3/4 m-auto'>
            <div className='font-bold text-2xl max-[470px]:text-lg text-[#2B2B2B]'>Web App redesign</div>
            <div className='flex bg-[#5C3890] gap-1 w-[150px] py-3 items-center justify-center rounded-md text-[#F5F5F7] text-sm max-md:w-[100px] max-md:text-xs'>
                <div>View More</div>
                <div><FiArrowRight/></div>
            </div>
        </div>
        <div className='grid grid-cols-3 max-md:grid-cols-1 my-10  gap-6 w-3/4  m-auto'>
            <ProjectCard t1={"REDESIGN #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"SHOW MORE"}
            list={false} title={"INDUSTRY"} width={"300px"}/>
            <ProjectCard t1={"REDESIGN #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"SHOW MORE"}
            list={false} title={"INDUSTRY"} width={"300px"}/>
            <ProjectCard t1={"REDESIGN #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"SHOW MORE"}
            list={false} title={"INDUSTRY"} width={"300px"}/>
        </div>

        <div className='flex justify-between items-center w-3/4 m-auto'>
            <div className='font-bold text-2xl max-[470px]:text-lg text-[#2B2B2B]'>Design Systems</div>
            <div className='flex bg-[#5C3890] gap-1 w-[150px] py-3 items-center justify-center rounded-md text-[#F5F5F7] text-sm max-md:w-[100px] max-md:text-xs'>
                <div>View More</div>
                <div><FiArrowRight/></div>
            </div>
        </div>
        <div className='flex my-10 max-md:flex-wrap  gap-6 w-1/2 max-[500px]:w-11/12 m-auto'>
            <ProjectCard t1={"REDESIGN #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"SHOW MORE"}
            list={false} width={"400px"}/>
            <ProjectCard t1={"REDESIGN #1"} t2={"12 MAR 2023"} head={"The impressive services"} para={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} bottom={"SHOW MORE"}
            list={false} width={"400px"}/>
            
        </div>
    </div>
  )
}
