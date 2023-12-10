import React from 'react'
import { ProjectCard } from './Cards/ProjectCard';
import Marquee from "react-fast-marquee";
import { caseStudy } from '../data/caseStudy';
import {webDesign} from '../data/webDesign';
import { designSystem } from '../data/designSystem';
export const Projects = () => {
    return (
        <div className='my-20' id='projects'>
            <div className='text-[#FF7A2F] text-center text-md font-bold'>Portfolio</div>
            <div className='text-xl font-bold text-center'>My Creative works Latest Projects</div>
            <div className='text-[#767676] text-sm max-md:text-xs max-md:w-11/12  text-center w-[50%] m-auto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
            <div className='flex justify-between items-center max-[300px]:w-11/12 w-3/4 mt-10 m-auto'>
                <div className='font-bold text-2xl text-[#2B2B2B]'>UX Case Study</div>
            </div>
            <div className='my-10  gap-8 w-3/4  m-auto'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {caseStudy.map((skill, id) => (
                    <div className="skill--box mx-4 max-w-[300px] min-h-[420px]" key={id} >
                        <ProjectCard t1={skill.t1} t2={skill.t2} head={skill.head} para={skill.para} bottom={skill.bottom}
                            list={true} />
                    </div>
                    ))}
                </Marquee>
            </div>
            <div className='flex justify-between items-center max-[300px]:w-11/12 w-3/4 m-auto'>
                <div className='font-bold text-2xl  text-[#2B2B2B]'>Web App redesign</div>
            </div>
            <div className='my-10  gap-8 w-3/4  m-auto'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {webDesign.map((skill, id) => (
                    <div className="skill--box mx-4 max-w-[300px] min-h-[420px]" key={id} >
                        <ProjectCard t1={skill.t1} t2={skill.t2} head={skill.head} para={skill.para} bottom={skill.bottom}
                    list={skill.list} title={skill.title} />
                    </div>
                    ))}
                </Marquee>
            </div>

            <div className='flex justify-between items-center max-[300px]:w-11/12 w-3/4 m-auto'>
                <div className='font-bold text-2xl  text-[#2B2B2B]'>Design Systems</div>
            </div>
            <div className='my-10  gap-8 w-3/4  m-auto'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {designSystem.map((skill, id) => (
                    <div className="skill--box mx-4 max-w-[300px] min-h-[420px]" key={id} >
                        <ProjectCard t1={skill.t1} t2={skill.t2} head={skill.head} para={skill.para} bottom={skill.bottom}
                    list={skill.list} />
                    </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
