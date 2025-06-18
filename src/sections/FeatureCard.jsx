import {abilities} from '../constants/index.js';

function FeatureCard() {
  return (
    <div>
        <div className='gap-19 p-3 m-5 justify-between grid grid-cols-1 md:grid-cols-3'>
          {abilities.map(({imgPath, title, desc})=>(
            <div key={title} className='flex flex-col rounded-2xl shadow-sm shadow-violet-400 p-2.5 hover:shadow-sm hover:shadow-teal-500 transition-shadow duration-300 ease-in-out'>
              <div className=''>
                <img src={imgPath} alt={title} />
              </div>
              <div className='text-2xl font-semibold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                {title}
              </div>
              <p className='w-98 text-gray-400'>
                {desc}
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FeatureCard