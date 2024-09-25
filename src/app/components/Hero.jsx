"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroImage, Globe, SkyScraper } from "../Assets"; 
import { Buttons } from "./custom/Button";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const place = [
  { name: "Investment Sales", id: 1 },
  { name: "Property Management", id: 2 },
  { name: "Advisory Services", id: 3 },
];

// Animation variants for skyscraper
const skyscraperVariants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 1 } }, 
};

// Animation variants for globe
const globeVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 1 } }, 
};

// Animation variants for the "Navigate" text
const navigateTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } }, // Fade in with the globe and skyscraper
  exit: { opacity: 0, transition: { duration: 1 } }, // Disappear at the same time
};

// Animation variants for the final text (Knowledge, Experience, etc.)
const finalTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 1 } }, // Show final text after all others disappear
};

export const Hero = () => {
  const [showSkyscraper, setShowSkyscraper] = useState(true);
  const [showGlobe, setShowGlobe] = useState(true);
  const [showNavigateText, setShowNavigateText] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    const showTextTimeout = setTimeout(() => {
      setShowNavigateText(true); // Show navigate text immediately with globe and skyscraper
    }, 2000); // Show text after 2 seconds

    const hideElementsTimeout = setTimeout(() => {
      setShowSkyscraper(false);
      setShowGlobe(false);
      setShowNavigateText(false); // Hide all elements together
    }, 4000); // Hide after 4 seconds

    const finalTextTimeout = setTimeout(() => {
      setShowFinalText(true); // Show final text after all others disappear
    }, 5000); // Show final text after 5 seconds

    return () => {
      clearTimeout(showTextTimeout);
      clearTimeout(hideElementsTimeout);
      clearTimeout(finalTextTimeout);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <div className="relative h-full w-full">
          <Navbar />

          {/* Hero image appears first */}
          <Image
            src={HeroImage}
            className="absolute top-0 left-0 object-cover w-full h-full -z-10"
            alt="hero"
          />

          {/* Skyscraper animation */}
          {showSkyscraper && (
            <motion.div
              variants={skyscraperVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-0 left-10"
            >
              <Image src={SkyScraper} alt="skyscraper" width={300} height={600} />
            </motion.div>
          )}

          {/* Globe animation */}
          {showGlobe && (
            <motion.div
              variants={globeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 left-10"
            >
              <Image src={Globe} alt="globe" width={200} height={200} />
            </motion.div>
          )}
        </div>

        {/* Navigate text appears with skyscraper and globe */}
        {showNavigateText && (
          <motion.div
            className="absolute top-1/4 left-40 text-white"
            variants={navigateTextVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="text-6xl leading-snug font-bold">
              <span className="block">Navigate the complexities of real estate with confidence...</span>
            </p>
          </motion.div>
        )}

        {/* Final text appears after all elements fade out */}
        {showFinalText && (
          <motion.div
            className="absolute top-1/4 left-40 text-white"
            variants={finalTextVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-6xl leading-snug font-bold">
              <span className="block">Knowledge.</span>
              <span className="block">Experience.</span>
              <span className="block">Integrity.</span>
              <span className="block">Results.</span>
            </p>
          </motion.div>
        )}

        {/* Bottom container with buttons */}
        <div className="absolute bottom-24 right-5 text-white max-w-2xl border-t border-white pt-4">
          <p className="text-lg">
            Sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet, lacus. Nullam vitae tincidunt ex ultrices tincidunt ipsum efficitur. Quisque cursus tortor, volutpat maximus lorem. Quis vitae scelerisque dui, adipiscing fringilla.
          </p>
          <div className="mt-4">
            <Buttons text={"Find your next commercial property"} textcolor={"white"} />
          </div>
        </div>

        {/* Container for the buttons at the bottom */}
        <div className="bg-white absolute bottom-0 right-0 w-[48.85%] rounded-tl-xl">
          <section className="flex justify-between">
            {place.map((item) => {
              return (
                <div className="mr-4 px-4 py-4" key={item.id}>
                  <Buttons text={item.name} textsize={"base"} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};
