import Herosection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import LogoMarquee from "./LogoMarquee";


export default function Partners() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <Herosection />
      <LogoMarquee/>
    </>
  );
}