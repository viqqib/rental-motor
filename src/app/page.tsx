'use client'
import Hero from "../components/section/Hero"
import BikeCard from "@/components/BikeCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";


export default function Home() {

const router = useRouter();

  return (
    <div className="">

      <div className="px-4 md:px-52">
    

  


      </div>

     {/* Hero Page */}
     <Hero />
      <div className="mx-auto  md:pt-1 px-5 pt-1 md:px-1 lg:px-24 pb-10">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="text-logo font-bold md:text-base text-xs">MOTOR TERBAIK</p>
          <h2 className="font-semibold md:text-4xl text-xl ">Tersedia Untuk Disewa</h2>
        </div>

        <div className="w-full mx-auto md:px-0 lg:px-44 h-auto py-6 flex flex-wrap md:flex-row gap-x-5 justify-center  gap-y-4 mt-5  ">
          <div className="inline-flex flex-wrap md:gap-x-8 gap-x-3 w-96 md:w-full justify-center gap-y-4">
            <BikeCard />
            <BikeCard />
            <BikeCard />
            <BikeCard />
          </div>

          <button className=" border-logo hover:bg-logo hover:text-white duration-200 font-bold rounded-md py-2 text-logo border-2 px-10 bg-bgone mt-5"
          onClick={() => router.push("/motor")}
          >CEK SEMUA MOTOR </button>
              
        </div>
      </div> 

     
      
      
      <Footer/>
    </div>
    
  );
}
