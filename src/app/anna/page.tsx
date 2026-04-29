import HeroSection from "./HeroSection";
import ScrollAnimations from "../components/ScrollAnimations";
import Card from "./card";
import { AnnapurnaCard } from "./ThreeDCardDemo";


export default function Anna() {
  return (
    <>
    <ScrollAnimations/>
      <HeroSection />
      <Card/>
      <AnnapurnaCard/>
   </>
  );
}