import React from 'react'
import { words } from '../constants/index';
import Button from '../components/button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';
import ShowcaseSection from './ShowcaseSection';
function Hero() {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power2.inOut',
      },
    )
    gsap.fromTo('header p',
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.6,
    })
  })
  return (
    <>
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='Background' className='w-full h-full object-cover' />
      </div>
      

      <div className='hero-layout'>
        {/* Hero content goes here LEFT */}
         <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-4'>
            
            <div className='hero-text'>
              <h1>Shaping 
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word)=>(
                      <span key={word.text} className='flex items-center md:gap-3  pb-2'>
                        <img src={word.imgPath} alt={word.text}  className='xl;size-12 md:size-10 dize-7 md:p-2 p-1 rounded-full bg-white-50'/>
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none w-150'>Hi I'm Prit. We are a team of passionate designers and developers who create beautiful and functional websites. Our mission is to help businesses grow by providing them with the best web solutions.</p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work"></Button>
          </div>
         </header>

        {/* Hero content goes here RIGHT 3D-MODEL*/}

        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
      <ShowcaseSection/>
    </section>
  </>
  )
}

export default Hero