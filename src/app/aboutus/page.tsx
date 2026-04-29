import AboutHero from "./AboutHero";
import { DraggableCardDemo } from "./draggable-card-demo";
import ScrollAnimations from "../../app/components/ScrollAnimations"
import Stat from "./stat";
import Cards from "../components/cards";

export default function AboutUs() {
  return (
    <>
      <ScrollAnimations /> {/* 🔥 THIS IS REQUIRED */}
      <AboutHero />
      <DraggableCardDemo />
      <Stat />
      <Cards />
    </>
  );
}