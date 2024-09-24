import Image from "next/image";
import { HeroImage } from "../Assets";
import { Buttons } from "./custom/Button";
import Navbar from "./Navbar";

const place = [
  { name: "Investment Sales", id: 1 },
  { name: "Property Management", id: 2 },
  { name: "Advisory Services", id: 3 },
];

export const Hero = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="relative h-full w-full">
          <Navbar />
          <Image
            src={HeroImage}
            className="absolute top-0 left-0 object-cover w-full h-full -z-10"
            alt="hero"
          />
        </div>

        <div className="absolute top-1/4 left-40 text-white">
          <p className="text-6xl leading-snug font-bold">
            <span className="block">Knowledge.</span>
            <span className="block">Experience.</span>
            <span className="block">Integrity.</span>
            <span className="block">Results.</span>
          </p>
        </div>

        <div className="absolute bottom-24 right-5 text-white max-w-2xl border-t border-white pt-4">
          <p className="text-lg">
            Sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt
            volutpat non, nisi id nisi non eu volutpat dui felis, nec amet,
            laoreet ex in amet, lacus. Nullam vitae tincidunt ex ultrices
            tincidunt ipsum efficitur. Quisque cursus tortor, volutpat maximus
            lorem. Quis vitae scelerisque dui, adipiscing fringilla.
          </p>
          <div className="mt-4">
            <Buttons
              text={"Find your next commercial property"}
              textcolor={"white"}
            />
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
