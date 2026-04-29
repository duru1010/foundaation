import HeroSection from "./herosection";
import ScrollAnimations from "../components/ScrollAnimations";
import Card from "./card";
import {PranitvaCampaignCard} from "./ThreeDCardDemo";

export default function Atta() {
  return (
    <>
    <ScrollAnimations/>
      <HeroSection />
    <Card/>
    <PranitvaCampaignCard/>
   </>
  );
}