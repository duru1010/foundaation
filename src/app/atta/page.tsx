import HeroSection from "./herosection";
import ScrollAnimations from "../components/ScrollAnimations";
import Card from "./card";
import {  AatmanirbharCardGroup } from "../atta/ThreeDCardDemo";


export default function Atta() {
  return (
    <>
    <ScrollAnimations/>
      <HeroSection />
      <Card/>
      < AatmanirbharCardGroup/>
   </>
  );
}