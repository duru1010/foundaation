import Herosection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import Card from "./card";


export default function Partners() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
       <Herosection />
       <Card/>
    </>
  );
}