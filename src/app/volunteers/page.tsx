import  HeroSection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import VolunteerForm from "./VolunteerForm";

export default function Team() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <HeroSection />
     < VolunteerForm/>
    </>
  );
}