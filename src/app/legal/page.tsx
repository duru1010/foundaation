import LegalHeroSection from "./LegalHeroSection";
import ScrollAnimations from "../../app/components/ScrollAnimations";
import { TabsDemo } from "./TabsDemo";


export default function Legal() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <LegalHeroSection />
      <TabsDemo />
    </>
  );
}