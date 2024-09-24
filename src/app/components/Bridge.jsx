import React from "react";

const GetStartedSection = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-1/2 p-12">
      <section className="absolute bottom-0 w-full h-1/2 bg-[#151D30]">
      </section>
        <section className="bg-[#F3F7FF] z-50 text-gray-800 p-12 w-1/2 h-auto rounded-md shadow-lg">
          <div className="mx-auto flex flex-col lg:flex-row justify-between">
            {/* Left Section */}
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
                Get Started
              </h2>
              <p className="mb-4">
                To invest in one of our offerings, please contact your Financial
                Professional.
              </p>
              <p>
                If you are a Financial Professional interested in one of our
                offerings for your clients or yourself, please{" "}
                <a href="#" className="text-blue-800 underline">
                  contact us
                </a>
                .
              </p>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-300 pt-6 lg:pl-8 lg:pt-0">
              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900">
                  Lorem ipsum Dolor Sita Ameno
                </h3>
                <a href="#" className="text-blue-600 hover:underline">
                  Visit Here
                </a>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900">
                  Lorem ipsum Dolor Sita Ameno
                </h3>
                <a href="#" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStartedSection;
