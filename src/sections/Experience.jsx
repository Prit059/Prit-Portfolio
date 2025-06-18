import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from "../components/GlowCard.jsx"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Experience() {
  useGSAP(() => {
    // Timeline setup
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });
    
    // Animate the vertical timeline line
    timeline.fromTo('.gradient-line', 
      { scaleY: 0, transformOrigin: 'top top' },
      { scaleY: 1, duration: 2, ease: 'power2.inOut' }
    );
    
    // Card animations
    gsap.utils.toArray('.timeline-card').forEach((card, i) => {
      const logo = card.querySelector('.timeline-logo');
      const textContent = card.querySelector('.expText');
      
      // Card container animation
      gsap.from(card, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
      
      // Logo animation
      gsap.from(logo, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logo,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
      
      // Text content animation
      gsap.from(textContent, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.25,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textContent,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Professional Work Experience" sub="My Career Overview" />

        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((cards, index) => (
              <div key={cards.title} className='exp-card-wrapper flex flex-col xl:flex-row gap-10 timeline-card'>
                {/* Animated card */}
                <div className='xl:w-3/6'>
                  <GlowCard card={cards} index={index}>
                    <div>
                      <img src={cards.imgPath} alt={cards.title} />
                    </div>
                  </GlowCard>
                </div>

                {/* Text section with timeline */}
                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper relative h-full'>
                      <div className='timeline absolute left-0 top-0 h-full w-px bg-gray-700' />
                      <div className='gradient-line absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-600' />
                    </div>

                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 mt-5 relative z-20 pl-8'>
                      <div className='timeline-logo w-16 h-16 flex-shrink-0'>
                        <img src={cards.logoPath} alt="logo" className='w-full h-full object-contain' />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{cards.title}</h1>
                        <p className='my-5 text-white-50'>{cards.date}</p>
                        <p className='text-[#839cb5]'>Responsibilities:</p>
                        <ul className='list-disc ms-5 mt-2 flex flex-col gap-5 text-white-50'>
                          {cards.responsibilities.map((responsibility) => (
                            <li key={responsibility} className='text-lg'>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience