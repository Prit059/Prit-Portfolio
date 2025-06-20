import React from 'react'


function ShowcaseSection() {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout grid grid-cols-1 md:grid-cols-2'>
          {/* LEFT */}
          <div className='first-project-wrapper'>
            <div className='image-wrapper w-1xl md:w-2xl'>
              <img src="/images/project1.png" alt="first-project" />
            </div>
            <div className='text-content'>
              <div className='badges'>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>React</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>CSS</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>Node</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>MySql</div>
              </div>
              <h2 className='flex flex-col'>
                <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>  
                  First Project : 
                </span>
                  Collabsphere</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptate.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='first-project-wrapper'>
            <div className='image-wrapper w-94 md:w-2xl'>
              <img src="/images/project2.png" alt="first-project" />
            </div>
            <div className='text-content'>
              <div className='badges'>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>React</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>CSS</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>Node</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>MySql</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>Python</div>
              </div>
              <h2 className='flex flex-col'>
                <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                  HackaThon Project : 
                </span>
                SmartKitchen AI</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptate.
              </p>
            </div>
          </div>

          <div className='first-project-wrapper'>
            <div className='image-wrapper w-94 md:w-2xl'>
              <img src="/images/project3.png" alt="first-project" />
            </div>
            <div className='text-content'>
              <div className='badges'>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>MERN</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>React</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>Tailwindcss</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>Node</div>
                <div className='badge bg-gray-600 p-2.5 rounded-4xl text-white'>MongoDB</div>
              </div>
              <h2 className='flex flex-col'>
                <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                  Internship Project :
                </span> 
              Interview Prep AI App</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptate.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ShowcaseSection