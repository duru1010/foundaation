import HeroSection from "./herosection";
import ScrollAnimations from "@/app/components/ScrollAnimations";
import Card from "./card";
import Timeline from "./timeline";
import ArogyaMobileUnit from "./ArogyaMobileUnit";


export default function Anna() {
  return (
    <>
    <ScrollAnimations/>
      <HeroSection />
    <Card/>
    <Timeline/>
    <ArogyaMobileUnit/>
   </>
  );
}