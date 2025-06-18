import React from 'react'
// import {Link} from 'react-route-d'

function NavBar() {
  return (
      <div className='m-5'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text text-transparent font-bold text-[23px]'>PRIT DEDANIYA</h3>
          </div>

          <div className=''>
            <ul className='flex gap-7 text-[19px] '>
              <li className='cursor-pointer hover:underline transition duration-300 ease-linear'>Home</li>
              <li className='cursor-pointer hover:underline transition duration-300 ease-linear'>Work</li>
              <li className='cursor-pointer hover:underline transition duration-300 ease-linear'>About</li>
              <li className='cursor-pointer hover:underline transition duration-300 ease-in-out'>Experience</li>
            </ul>
          </div>

          <div className='mr-5 bg-white text-black p-2.5 rounded-xl text-lg cursor-pointer hover:bg-transparent hover:text-white hover:border border-white transition duration-300 ease-in-out'>
            <button>Content Me</button>
          </div>
        </div>
      </div>
  )
}

export default NavBar