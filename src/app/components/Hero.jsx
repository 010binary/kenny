import Image from "next/image";
import { HeroImage } from "../Assets";

export const Hero = () => {
  return (
    <div className="-z-10 h-screen w-full">
      <Image
        src={HeroImage}
        className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
        alt="hero"
      />
    </div>
  );
};
