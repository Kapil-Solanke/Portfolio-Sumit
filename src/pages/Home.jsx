import React from 'react'
import {Navbar} from '../components/Navbar'
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {Offerings} from '../components/Offerings'
import { Projects } from '../components/Projects'
import { Comments } from '../components/Comments'
import { Process } from '../components/Process'
import { Faq } from '../components/Faq'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <div className='min-h-fit w-full' id='home'>
        <Navbar/>
        <Hero/>
        <About/>
        <Offerings/>
        <Projects/>
        <Comments/>
        <Process/>
        <Faq/>
        <Cta/>
        <Footer/>
    </div>
  )
}
