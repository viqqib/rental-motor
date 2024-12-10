'use client'
import Hero from "../components/section/Hero"
import BikeCard from "@/components/BikeCard";
import Footer from "@/components/Footer";
import Motor from "../components/section/Motor"
import { useRouter } from "next/navigation";


export default function Home() {



  return (
    <div className="">

      <div className="px-4 md:px-52">
    

  


      </div>

     {/* Hero Page */}
     <Hero />
     <Motor />
     
      

     
      
      
      <Footer/>
    </div>
    
  );
}
