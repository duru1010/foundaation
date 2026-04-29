import  HeroPage from "./herosection";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import CampaignGrid from "./CampaignGrid";

export default function Partners() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      < HeroPage/>
     <CampaignGrid/>
    </>
  );
}