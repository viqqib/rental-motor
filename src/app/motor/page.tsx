'use client'
import BikeCard from '@/components/BikeCard'
import React from 'react'
import motors from '@/lib/motor'



export default function Bike() {
    return(
        <>
        <div className='px-5 md:px-32 py-7 flex flex-col w-full'>
            <div className='header w-full flex justify-between'>
                <p className='text-base md:text-2xl font-semibold'>Tersedia untuk disewa</p>

                <div className='bike-bar'>
                    <input className='md:block hidden search-bar bg-white rounded-lg px-3 w-64 py-3 ' placeholder='Cari Motor' type='text' style={{ boxShadow : "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}/>                        
                </div>
            </div>


            <div className="w-full flex gap-2 md:gap-8 justify-center gap-y-7 flex-wrap mt-4">
            {motors
                .filter((motor) => motor.status === "tersedia") // Filter motorbikes with status 'tersedia'
                .map((motor) => (
                <BikeCard
                    key={motor.id} // Use a unique key for React
                    id={motor.id}
                    tipe={motor.tipe}
                    merek={motor.merek}
                    harga={motor.harga}
                    link={`/motor/${motor.id}`} 
                    status='tersedia' // Ensure `link` is present in your data
                />
                ))}
            </div>
        </div>

        <div className='px-5 md:px-32 py-7 flex flex-col w-full'>
            <div className='header w-full flex justify-between'>
                <p className='text-base md:text-2xl font-semibold'>Tersedia Besok</p>

                
            </div>


            <div className="w-full flex gap-2 md:gap-8 justify-center gap-y-7 flex-wrap mt-4">
            {motors
                .filter((motor) => motor.status === "dirental") // Filter motorbikes with status 'tersedia'
                .map((motor) => (
                <BikeCard
                    key={motor.id} // Use a unique key for React
                    id={motor.id}
                    tipe={motor.tipe}
                    merek={motor.merek}
                    harga={motor.harga}
                    link={`/motor/${motor.id}`} 
                    status='dirental' // Ensure `link` is present in your data
                />
                ))}
            </div>
        </div>

</>
    )
}