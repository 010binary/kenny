import React from "react";
import Image from "next/image";
import { FirstCard,SecondCard, ThirdCard, FourthCard } from "../Assets";
import { Buttons } from "./custom/Button";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} layout="responsive" width={400} height={200} />
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4">
          <Buttons text={"Read more"} textweight={"semibold"} />
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      image: FirstCard,
      title: "Lorem ipsum dolor sita ameno ipsum dolor",
      description:
        "sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...",
    },
    {
      image:SecondCard,
      title: "Lorem ipsum dolor sita ameno ipsum dolor",
      description:
        "sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...",
    },
    {
      image:ThirdCard,
      title: "Lorem ipsum dolor sita ameno ipsum dolor",
      description:
        "sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...",
    },
    {
      image:
        FourthCard,
      title: "Lorem ipsum dolor sita ameno ipsum dolor",
      description:
        "sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
