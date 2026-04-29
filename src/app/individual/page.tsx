import Herosection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import IndividualSupport from "./IndividualSupport";

export default function Partners() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <Herosection />
      <IndividualSupport/>
    </>
  );
}