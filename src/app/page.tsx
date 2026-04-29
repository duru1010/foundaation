import Image from "next/image";

import HeroSection from "./components/herosection";
import Cards from "./components/cards";
import Stats from "./components/Stats";


export default function Home() {
  return (
   <>
   
   <HeroSection/>
   <Cards/>
   <Stats/>
   </>
  );
}
