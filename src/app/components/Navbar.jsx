import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-4 z-50 border-b border-white">
        <div className="w-[181px] h-[39px] font-medium text-white text-4xl">
          <h1>BLACKBAIN</h1>
        </div>
        <ul className="text-white w-1/2 flex justify-between text-lg">
          <li>
            <a href="#" className="uppercase underline underline-offset-8">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              Advisory
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              RESIDENTIAL
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              COMMERCIAL
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
