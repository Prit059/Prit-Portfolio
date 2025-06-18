import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { words } from '../constants/index';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import AnimatedCounter from '../components/AnimatedCounter';
import NavBar from '../components/NavBar';

function Hero() {
  const pritRef = useRef(null);

  useEffect(() => {
    const h1 = pritRef.current;
    if (h1) {
      const text = h1.textContent || '';
      h1.innerHTML = text
        .split(' ')
        .map(
          (char, index) =>
            `<span class="char-span-${index} inline-block font-bold drop-shadow-[0_0_10px_cyan]">${char}</span>`
        )
        .join(' ');

      gsap.fromTo(
        h1.querySelectorAll('.char-span-1'),
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          rotateX: 360,
          y: 68,
          x: -700,
          duration: 1,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        h1.querySelectorAll('.char-span-0'),
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          x: 30,
          rotateZ: 90,
          delay: 0.5,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.inOut',
        delay: 1.5,
      }
    );

    gsap.fromTo(
      'header p',
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.6,
        delay: 2.2,
      }
    );

    gsap.fromTo('#mainname',
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: 1.3,
        opacity: 0,
        zIndex: 0,
      }
    );
  });

  return (
    <>
      <NavBar />
      <section id='hero' className='relative overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-full z-0 opacity-20'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#0ff'
            fillOpacity='0.4'
            d='M0,192L40,186.7C80,181,160,171,240,170.7C320,171,400,181,480,170.7C560,160,640,128,720,128C800,128,880,160,960,176C1040,192,1120,192,1200,170.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
          />
        </svg>

        <div className='absolute top-0 left-0 z-10'>
          <img
            src='/images/bg.png'
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>

        <div
          id='mainname'
          className='absolute items-center justify-center z-1000 text-9xl bg-black w-[100%] h-[100%]'
        >
          <div className='absolute items-center justify-center left-[32%] top-[20%]'>
            <h1 ref={pritRef} id='prit' className='font-bold'>
              DEDAN!Y@ PR!T
            </h1>
          </div>
        </div>

        <div className='hero-layout'>
          <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-4'>
              <div className='hero-text'>
                <h1>
                  Shaping
                  <span className='slide'>
                    <span className='wrapper'>
                      {words.map((word, index) => (
                        <span
                          key={`${word.text}-${index}`}
                          className='flex items-center md:gap-3 pb-2'
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className='size-12 md:size-10 dize-7 md:p-2 p-1 rounded-full bg-cyan-400'
                          />
                          <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                            {word.text}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className='text-white-50 md:text-xl relative z-10 pointer-events-none w-150'>
                Hi I'm Prit. We are a team of passionate designers and developers who create beautiful and functional websites. Our mission is to help businesses grow by providing them with the best web solutions.
              </p>

              <Button className='md:w-80 md:h-16 w-60 h-12' id='button' text='See My Work' />
            </div>
          </header>

          <figure>
            <div className='hero-3d-layout'>
              <HeroExperience />
            </div>
          </figure>
        </div>

        <AnimatedCounter />
      </section>
    </>
  );
}

export default Hero;
