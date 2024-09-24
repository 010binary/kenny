import React from 'react';
import Image from 'next/image';
import { chair, reservation, tallbuilding } from '../Assets';
import { ChevronDown, ArrowRight } from 'lucide-react';

const ExploreProperties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
        <h1 className="text-4xl font-bold text-left mb-4 text-blue-900 lg:w-1/2">
          Explore Some of Our<br />properties
        </h1>
        <p className="text-right text-gray-600 lg:w-1/2">
          sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat<br />
          non, nisi id nisi non eu volutpat dui felis, nec amet, laoreet ex in amet,<br />
          lacus .Nullam vitae tincidunt ex ultrices tincidunt ipsu
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Filter Section */}
        <div className="lg:w-1/3 grid place-content-center">
            <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-900">EXPLORE WHAT WE CREATE</h2>
            <p className="mb-6 text-xl text-blue-900">I'm looking for</p>

            <div className="space-y-4 mb-6 relative">
                {['Property Type', 'Select location'].map((option, index) => (
                <div key={index} className="relative">
                    <select className="appearance-none bg-transparent w-full border-b-2 border-gray-300 text-gray-700 text-xl font-semibold focus:outline-none pb-2">
                    <option>{option}</option>
                    </select>
                    <ChevronDown className="absolute right-0 bottom-3 h-5 w-5 text-gray-400" />
                </div>
                ))}
                <button className="text-blue-600 text-sm absolute bottom-0 right-0">Reset ↻</button>
            </div>
          </div>

          <div className="space-y-4">
            {['View residential', 'Advisory services'].map((text, index) => (
              <button key={index} className={`flex items-center space-x-2 ${index === 0 ? 'text-blue-600' : 'text-gray-600'} font-semibold`}>
                <ArrowRight className="h-5 w-5" />
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Property Section */}
        <div className="lg:w-2/3">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="lg:w-1/2 space-y-4">
              <Image src={chair} alt="Kitchen interior" className="w-full h-auto object-cover rounded-sm" />
              <Image src={reservation} alt="Rooftop lounge" className="w-full h-auto object-cover rounded-sm" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-900">Lorem Ipsum Dolor Sita</h3>
                <p className="text-gray-600 mb-4">
                  sit cursus massa non laoreet lobortis, Cras est tincidunt volutpat non, nisi id nisi non eu vo
                </p>
                <button className="flex items-center space-x-2 text-gray-600 font-semibold">
                  <ArrowRight className="h-5 w-5" />
                  <span>More info</span>
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="lg:w-1/2">
              <Image src={tallbuilding} alt="Tall building" className="w-full h-full object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;