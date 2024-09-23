import Image from "next/image";
import { HeroImage } from "../Assets";
import { Buttons } from "./custom/Button";

export const Hero = () => {
  return (
    <>
      <div className="-z-10 h-auto w-full">
        <Image
          src={HeroImage}
          className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
          alt="hero"
        />
      </div>
      <div className="text-white">
        <p>
          <span
            className="block capitalize
          text-xl"
          >
            Knowledge.
          </span>
          <span
            className="block capitalize
          text-xl"
          >
            Experience.
          </span>
          <span
            className="block capitalize
          text-xl"
          >
            Integrity.
          </span>
          <span
            className="block capitalize
          text-xl"
          >
            Results.
          </span>
        </p>
      </div>
      <div className="text-white border-t border-white pt-1">
        <p>
          sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt
          volutpat non, nisi id nisi non eu volutpat dui felis, nec amet,
          laoreet ex in amet, lacus .Nullam vitae tincidunt ex ultrices
          tincidunt ipsum efficitur. Quisque cursus tortor. volutpat maximus
          lorem. quis vitae scelerisque dui. adipiscing fringilla , luctus
          consectetur viverra hendrerit Nunc quam nec lorem. lorem. urna.
          placerat lorem. I
        </p>
        <Buttons text={"hello"} textcolor={"white"} />
      </div>
    </>
  );
};
