import { Hero } from "./components/Hero";
import { Teams } from "./components/Teams";
import CardGrid from "./components/Insight";
import ExploreProperties from "./components/Explore";
import GetStartedSection from "./components/Bridge";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Teams />
      <CardGrid />
      <ExploreProperties />
      <GetStartedSection />
      <Footer />
    </>
  );
}
