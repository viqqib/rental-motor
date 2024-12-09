import React from 'react'
import Image from 'next/image'
import bikeImg from '../../public/images/bike.png'

function BikeCard() {
  return (
    <div className='py-1 rounded-md px-2 md:px-3 w-40 md:w-64 bg-white'  style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;' }}>
      <div className='text-atas'>
        <p className='text-gray-500 bike-brand text-xs md:text-base'>Honda</p>
        <p className='bike-type text-sm md:text-xl -mt-1 font-bold'>Beat Kobo 2024</p>
      </div>
      <div className='bike-img my-1 md:my-2'>
        <Image width={500} src={bikeImg} alt='sjsj' className='w-full h-[100px] md:h-[170px] rounded-md fill'/>
      </div>
      <p></p>

      <div className="bike-price pb-1">
              <p className="md:text-2xl text-sm font-bold mb-1 md:mb-1 mt-1">Rp.20,000 <span className="text-xs">/ </span><span className="text-[0.65rem] font-semibold text-gray-500">12 Jam</span></p>

              <button className="w-full text-xs md:text-base bg-logo text-white py-1.5 md:py-2 font-bold rounded-md hover:bg-primary duration-300">Rental Sekarang</button>
            </div>

    </div>
    // <div className="md:w-64 md:px-4 px-2 py-1 md:h-80 h-[13.2rem] w-40 rounded-md  bg-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;' }}>

    //         <div className="bike-name">
    //           <div className="text-gray-400 md:text-base font-semibold text-xs">Honda</div>
    //           <div className="text-base md:text-2xl font-bold  -mt-1">Beat Kobo 2024</div>
    //         </div>
          
    //         <div className="bike-img my-1 rounded-md w-full md:h-40 h-24 bg-black">
    //           <Image width={500} src={bikeImg} alt='sjsj' className='w-full h-full rounded-md fill'/>
    //         </div>

            // <div className="bike-price">
            //   <p className="md:text-2xl font-bold mb-1 md:mb-2 mt-1">Rp.20,000 <span className="text-sm">/ </span><span className="text-xs">12 Jam</span></p>

            //   <button className="w-full text-xs md:text-base bg-logo text-white py-1.5 md:py-2 font-bold rounded-md hover:bg-primary duration-300">Rental Sekarang</button>
            // </div>

    //     </div>
  )
}

export default BikeCard