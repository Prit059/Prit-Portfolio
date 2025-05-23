import React, { useEffect, useRef } from 'react'
import { counterItems } from '../constants'
import gsap from 'gsap'
import CountUp from 'react-countup'

function AnimatedCounter() {
  const counterRefs = useRef([])


  return (
    <div id='counter' className='padding-x-lg  xl:mt-0 '>
      <div className='mb-9 grid-4-cols sm:grid-1-cols'>
        {counterItems.map((item, index) => (
          <div key={item.label} className='bg-zinc-800 p-2.5 rounded-4xl counter-item text-center hover:bg-zinc-600 transform-view'>
            <div 
              ref={el => counterRefs.current[index] = el}
              className='counter-number text-white text-4xl font-bold mb-2'
            >
              
              <CountUp start={0} suffix={item.suffix} end={item.value}></CountUp>
            </div>
            <div className='counter-label text-gray-400 text-md'>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter