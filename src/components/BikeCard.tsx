import React from 'react';
import Image from 'next/image';
import bikeImg from '../../public/images/bike.png';
import { useRouter } from 'next/navigation';

type BikeCardProps = {
  id: number;
  tipe: string;
  merek: string;
  harga: string;
  link: string;
  status: string;
};

export default function BikeCard({
  id,
  tipe,
  merek,
  harga,
  link,
  status,
}: BikeCardProps) {
  const router = useRouter();

  const isAvailable = status === 'tersedia';

  return (
    <div
      key={id}
      className="py-1 rounded-md px-2 md:px-3 w-40 md:w-64 bg-white"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;' }}
    >
      <div className="text-atas">
        <p className="text-gray-500 bike-brand text-xs md:text-base">{merek}</p>
        <p className="bike-type text-sm md:text-xl -mt-1 font-bold">{tipe}</p>
      </div>
      <div className="bike-img my-1 md:my-2">
        <Image
          width={500}
          src={bikeImg}
          alt="motorbike"
          className="w-full h-[100px] md:h-[170px] rounded-md fill"
        />
      </div>

      <div className="bike-price pb-1">
        <p className="md:text-2xl text-sm font-bold mb-1 md:mb-1 mt-1">
          Rp.{harga} <span className="text-xs">/ </span>
          <span className="text-[0.65rem] font-semibold text-gray-500">12 Jam</span>
        </p>

        <button
          onClick={() => isAvailable && router.push(link)} // Only navigate if available
          className={`w-full text-xs md:text-base py-1.5 md:py-2 font-bold rounded-md duration-300 ${
            isAvailable
              ? 'bg-logo text-white hover:bg-primary'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          {isAvailable ? 'Rental Sekarang' : 'Tidak Tersedia'}
        </button>
      </div>
    </div>
  );
}
