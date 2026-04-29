import  HeroSection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import LeadershipGrid from "./LeadershipGrid";


export default function Team() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <HeroSection />
      <LeadershipGrid />
    </>
  );
}