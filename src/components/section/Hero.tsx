import React from 'react';
import Image from 'next/image';
import heroImg from '../../../public/images/hero.png';


function Hero() {
  return (
    <>
    
    <div className="mx-auto relative  w-full" style={{ height: '700px' }}>
      <div
        className="md:h-[500px] h-[650px] relative pb-10"
        style={{
          backgroundImage: "url('/images/jepretualang-stN5xuXLde4-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(46, 48, 0, 0.6)", // Corrected: removed the semicolon
          }}
        ></div>

        {/* Content */}
        <div
          style={{ position: "relative", zIndex: 1, }}
          className="flex md:flex-row flex-col h-full justify-between md:pt-1 px-10 pt-10 md:px-32"
        >
          <div className="md:h-full flex flex-col  justify-center ">
            <div className='text-white md:w-[600px]'>
              <h2 className='font-serif text-xl md:text-3xl'>Rental Motor Murah Yogyakarta</h2>
              <p className="font-bold text-[2.4rem] md:text-7xl text-white leading-none">
                Rental Motor<br />Tanpa Ribet
              </p>
              <p className="mt-4 md:text-base text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad itaque similique assumenda fugiat quis saepe. Dolorum labore debitis odio in pariatur, soluta voluptates, doloribus culpa quia temporibus modi vero?</p>
              
              <div>

              <div className="mt-5  md:flex gap-5">
                <div className="bg-[rgba(18,18,18,0.8)] text-xs md:text-base px-3 md:px-5 py-2  w-auto inline-flex items-center gap-2 rounded-md border">
                  <div className="w-[6px]  h-[6px] bg-green-500 rounded-full"></div>17 Motor Tersedia
                </div>
                <button className="bg-[#FF9000]  text-xs md:text-base font-bold px-3 md:px-5 py-2 rounded-md border md:mt-0 mt-3">
                  Cek & Rental Sekarang
                </button>
              </div>
                
              </div>
            </div>
          </div>

          <div className="absolute md:-right-[10px] md:top-0 top-[350px] flex-nowrap flex">
              <Image
                src={heroImg}
                width={900}
                alt="motor"
                className="md:min-w-[500px] mt-10 overflow-hidden flex flex-nowrap flex-shrink-0"
              />
          </div>

        </div>

      </div>

    </div>
    </>
)}

export default Hero;
