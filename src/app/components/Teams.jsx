"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TeamsImage } from "../Assets";
import { Buttons } from "./custom/Button";
import { CitiesCard, CitiesCard1, CitiesCard2, CitiesCard3 } from "../Assets";

export const Teams = () => {
  return (
    <>
      <div className="flex bg-white">
        <section className="w-[52.5%]">
          <Image src={TeamsImage} className="w-full h-auto" />
        </section>
        <section className=" bg-white w-1/2 px-20 flex justify-between flex-col py-8 ">
          <h2 className="text-5xl font-bold leading-snug border-b border-blue-950/60 pb-8 mb-4">
            Work with Our Team of Experts at Nuel & May
          </h2>
          <p className="text-lg">
            sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt
            volutpat non, nisi id nisi non eu volutpat dui felis, nec amet,
            laoreet ex in amet, lacus .Nullam vitae tincidunt ex ultrices
            tincidunt ipsum efficitur. Quisque cursus tortor. volutpat maximus
            lorem. quis vitae scelerisque dui. adipiscing fringilla ,
          </p>
          <div className="mt-4">
            <Buttons text={"Learn more about our services"} />
          </div>
        </section>
      </div>

      <div className="bg-white space-y-4 py-4">
        <section className="p-10 px-12 flex justify-between items-center">
          <p className="w-1/3 text-4xl font-bold">
            Explore Some of the Cities We Cater For
          </p>
          <p className="w-1/3 text-justify">
            sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt
            volutpat non, nisi id nisi non eu volutpat dui felis, nec amet,
            laoreet ex in amet, lacus .Nullam vitae tincidunt ex ultrices
            tincidunt ipsu
          </p>
        </section>
        <section className=" flex gap-4 justify-center items-center">
          <section className="flex gap-4 justify-center items-center">
            {[
              {
                src: CitiesCard,
                cites: "Abuja",
                text: "sit cursus assa non laoreet lobortis, Cras est. placerat tncidun non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet, lcus .Nullam vitae tincidunt ex ultrices tincidunt ipsu. sit cursus massa non laoreet lobortis, Cras est. placerat tincit ",
              },
              {
                src: CitiesCard1,
                cites: "Lagos",
                text: "sit cursus assa non laoreet lobortis, Cras est. placerat tncidun non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet, lcus .Nullam vitae tincidunt ex ultrices tincidunt ipsu. sit cursus massa non laoreet lobortis, Cras est. placerat tincit ",
              },
              {
                src: CitiesCard2,
                cites: "Port-Harcourt",
                text: "sit cursus assa non laoreet lobortis, Cras est. placerat tncidun non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet, lcus .Nullam vitae tincidunt ex ultrices tincidunt ipsu. sit cursus massa non laoreet lobortis, Cras est. placerat tincit ",
              },
              {
                src: CitiesCard3,
                cites: "Ibadan",
                text: "sit cursus assa non laoreet lobortis, Cras est. placerat tncidun non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet, lcus .Nullam vitae tincidunt ex ultrices tincidunt ipsu. sit cursus massa non laoreet lobortis, Cras est. placerat tincit ",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  src={item.src}
                  className="w-auto h-auto transition-transform duration-300 ease-in-out"
                  alt={`city-${index}`}
                />
                <div className="absolute inset-5 bg-gradient-to-b from-custom-light-blue to-custom-dark-blue bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-content-center px-4 py-8">
                  <h4 className="capitalize font-bold text-lg  text-center text-white">
                    {item.cites}
                  </h4>
                  <p className="text-white text-base text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
};
