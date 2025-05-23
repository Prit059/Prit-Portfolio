import React from 'react'

function Button() {
  return (
    <a
    onClick={(e)=>{
      e.preventDefault();

      const target = document.getElementById('counter');
      if(target && id){
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY-offset;
        window.scrollTo({top, behavior: "smooth"})
      }
    }}>
      <div className='cta-button group w-80'>
        <div className='bg-circle' />
          <p className="text">See My Work</p>
          <div className='arrow-wrapper'>
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
      </div>
    </a>
  )
}

export default Button