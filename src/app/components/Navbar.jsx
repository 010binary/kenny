import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="w-[181px] h-[39px] font-medium">
          <h1>BLACKBAIN</h1>
        </div>
        <ul className="text-white w-1/2 flex justify-between">
          <li>
            <a href="#" className="uppercase underline">
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
