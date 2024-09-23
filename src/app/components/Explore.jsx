import React from 'react';
import Image from "next/image";
import {chair,reservation, tallbuilding} from "../Assets" 
const ExploreProperties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center md:text-left mb-8">
        Explore Some of Our properties
      </h1>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Filter Section */}
        <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Explore What We Create</h2>
          <p className="mb-6 text-xl">I'm looking for</p>

          <div className="space-y-4">
            <select className="block w-full px-4 py-2 border rounded-md focus:outline-none">
              <option>Property Type</option>
            </select>
            <select className="block w-full px-4 py-2 border rounded-md focus:outline-none">
              <option>Select location</option>
            </select>
          </div>

          <button className="text-blue-600 mt-2 text-sm">Reset ↻</button>

          <div className="mt-6 space-y-2">
            <button className="flex items-center space-x-2 text-blue-600">
              <span>→</span>
              <span>View residential</span>
            </button>
            <button className="flex items-center space-x-2 text-blue-600">
              <span>→</span>
              <span>Advisory services</span>
            </button>
          </div>
        </div>

        {/* Right Property Section */}
        <div className="md:w-2/3">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
    <Image src={chair} alt="Property 1" className="rounded-sm w-full h-auto object-cover" />
    <Image src={tallbuilding} alt="Property 2" className="rounded-lg w-full h-auto object-cover" />
    <Image src={reservation} alt="Property 3" className="rounded-sm w-full h-auto object-cover" />
  </div>


          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">Lorem Ipsum Dolor Sita</h3>
            <p className="text-gray-600 mb-4">
              sit cursus massa non laoreet lobortis, Cras est placerat tincidunt volutpat
            </p>
            <button className="text-blue-600 flex items-center space-x-2">
              <span>→</span>
              <span>More info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
