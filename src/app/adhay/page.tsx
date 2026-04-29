import Herosection  from "./herosection";
import ScrollAnimations from "../components/ScrollAnimations";
import Card from "./card";
import { AdhyayanCard } from "../adhay/ThreeDCardDemo";


export default function Adhay() {
  return (
    <>
      <ScrollAnimations />
      <Herosection />
      <Card />
      <AdhyayanCard />
    </>
  );
}