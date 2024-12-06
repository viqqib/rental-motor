import React from 'react'
import headerLinks from '@/lib/data'

function Navbar() {
  return (
    <nav>
    <div className='w-full bg-white shadow-md py-5 md:py-6 px-5 md:px-32 flex justify-between'>
        <div className='logo'>
            <span className='font-bold text-base md:text-3xl text-logo'>Three J Rental Motor</span>
        </div>

        <div className='md:block hidden'>
        <ul className='nav flex gap-10 font-semibold'>
        {headerLinks.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
         </ul>
        </div>
        
    </div>
    </nav>
  )
}

export default Navbar