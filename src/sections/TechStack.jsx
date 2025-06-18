import React from 'react'
import { techStackIcons } from '../constants'
import TitleHeader from '../components/TitleHeader'
import TechIcon from '../Models/TechLogos/TechIcon'
// import { useGSAP } from '@gsap/react'
// import { gsap } from 'gsap'
function TechStack() {

  return (
    <div id='skills' className='section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
        title="My Preferred Tech Stack"
        sub="The Skills I Bring to the Table"/>
      </div>

      <div className='tech-grid mb-5'>
        {techStackIcons.map((icon) => (
          <div key={icon.name} className='card-border h-100 tech-card overflow-hidden group xl:rounded-b-full rounded-lg'>
            {/* <div className='tech-card-animated-bg'/> */}
            <div className='tech-card-content'>
              <div className='tech-icon-wrapper'>
                <TechIcon model={icon}/>
              </div>

              <div className='padding-x w-full'>
                <p>{icon.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack