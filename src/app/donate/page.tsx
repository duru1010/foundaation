import Herosection from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import DonationForm from "./DonationForm";

export default function Partners() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <Herosection />
    <DonationForm/>
    </>
  );
}