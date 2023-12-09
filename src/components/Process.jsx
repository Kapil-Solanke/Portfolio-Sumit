import React from 'react'
import { ProcessCard } from './Cards/ProcessCard'

export const Process = () => {
  return (
    <div className='my-20 min-h-[500px] ' id='#process'>
        <div className='text-base  font-semibold text-[#FF7A2F] text-center'>MY PROCESS</div>
        <div className='text-3xl max-[300px]:text-2xl font-bold text-center'>How I do the work</div>
        <ProcessCard num={"01"} head={"Project Brief"} para={"Comprehend project goals, product values, target audience, and necessary features to establish deadlines for seamless execution and alignment."}/>
        <ProcessCard num={"02"} head={"Research"} para={"Analyze competition, conduct user research, utilize analytics, create customer journey and affinity maps, and engage in user interviews and surveys for comprehensive insights."} reverse={true} left={true}/>
        <ProcessCard num={"03"} head={"Prototype"} para={"Comprehend project goals, product values, target audience, and necessary features to establish deadlines for seamless execution and alignment."}/>
        <ProcessCard num={"04"} head={"Design"} para={"Analyze competition, conduct user research, utilize analytics, create customer journey and affinity maps, and engage in user interviews and surveys for comprehensive insights."} reverse={true} left={true}/>
        <ProcessCard num={"05"} head={"Profit & Result"} para={"Comprehend project goals, product values, target audience, and necessary features to establish deadlines for seamless execution and alignment."}/>
    </div>
  )
}
