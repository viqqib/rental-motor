import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='text-white bg-footer px-4 md:px-32 max-w-full hero py-5'>
        <div className='top flex w-full justify-between items-center'>
            <div className='logo text-lg md:text-3xl font-semibold'>Tentang Kami</div>
            <div className='link md:text-base text-sm flex gap-5'>
                <a href="">Blog</a>
                <a href="">Blog</a>
                <a href="">Blog</a>
                <a href="">Blog</a>
            </div>
        </div>

        <div className='center flex w-full justify-between mt-4'>
            <div className=''>
                <p className='md:w-72 w-52 leading-5 text-xs md:text-base'>Rental motor murah Yogyakarta Rental motor tanpa </p>
                <div className='location md:flex gap-x-2 mt-7 justify-center items-center hidden'>
                    <FontAwesomeIcon icon={faLocationDot} className="text-white hover:text-red-800 text-xl" />
                    <p className='md:text-base text-xs'>Jl.Ringin raya 122 Mancasan Lor Dero Condongcatur Depok Sleman
                </p>
                </div>

            </div>

                <div className='sosmed gap-x-2 flex text-2xl'>
                    <FontAwesomeIcon icon={faFacebook} className=""
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} className=""
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faWhatsapp} className=""
                    ></FontAwesomeIcon>
                    
                </div>
        </div>



        <div className='line w-full border-t-2 my-4 '></div>

        <p className='self-center md:text-base'>2024 Copyright Fiqqidev</p>
    </div>
  )
}

export default Footer