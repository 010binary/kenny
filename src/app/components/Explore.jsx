import React from 'react';
import Image from 'next/image';
import { chair, reservation, tallbuilding } from '../Assets';
import { ChevronDown } from 'lucide-react';
import { Buttons } from './custom/Button';

const ExploreProperties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-left mb-4 text-[#02365C] lg:w-1/2">
          Explore Some of Our <br /> Properties
        </h1>
        <p className="text-sm sm:text-base lg:w-1/3 text-justify mb-4 lg:mb-0">
          Sit cursus massa non laoreet lobortis, Cras est. Placerat tincidunt
          volutpat non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex
          in amet, lacus. Nullam vitae tincidunt ex ultrices tincidunt ipsum.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Filter Section */}
        <div className="lg:w-1/3 w-full grid place-content-center mb-8 lg:mb-0">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#02365C]">EXPLORE WHAT WE CREATE</h2>
            <p className="mb-6 text-lg sm:text-xl text-blue-900">I'm looking for</p>

            <div className="space-y-4 mb-6 relative">
              {[
                {
                  label: 'Property Type',
                  options: ['Apartment', 'House', 'Studio', 'Condo'],
                },
                {
                  label: 'Select Location',
                  options: ['New York', 'San Francisco', 'Los Angeles', 'Chicago'],
                },
              ].map((dropdown, index) => (
                <div key={index} className="relative">
                  <select className="appearance-none bg-transparent w-full border-b-2 border-gray-300 text-gray-700 text-lg sm:text-xl font-semibold focus:outline-none pb-2">
                    <option>{dropdown.label}</option>
                    {dropdown.options.map((opt, optIndex) => (
                      <option key={optIndex} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-3 h-5 w-5 text-gray-400" />
                </div>
              ))}

              <div className="text-blue-600 text-sm text-right">Reset ↻</div>
            </div>
          </div>

          <div className="space-y-4">
            {['View residential', 'Advisory services'].map((text, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600 font-semibold">
                <Buttons className="h-5 w-5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Property Section */}
        <div className="lg:w-2/3 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <Image src={chair} alt="Kitchen interior" className="w-full h-auto object-cover" />
              <Image src={reservation} alt="Rooftop lounge" className="w-full h-auto object-cover" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-900">Lorem Ipsum Dolor Sita</h3>
                <p className="text-gray-600 mb-4">
                  Sit cursus massa non laoreet lobortis, Cras est tincidunt volutpat non, nisi id nisi non eu vo.
                </p>
                <div className="flex items-center space-x-2 text-[#23314F] font-semibold">
                  <Buttons className="h-5 w-5" />
                  <span>More info</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:h-auto">
              <Image src={tallbuilding} alt="Tall building" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
