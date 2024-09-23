import Image from "next/image";
import { Hero } from "./components/Hero";
import CardGrid from "./components/Insight";
import ExploreProperties from "./components/Explore";
import GetStartedSection from "./components/Bridge";

export default function Home() {
  return (
    <>
      <div className="white">Hello</div>
      <Hero />
      <CardGrid/>
      <ExploreProperties/>
      <GetStartedSection/>
      
    </>
  );
}
