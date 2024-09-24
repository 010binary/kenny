import React from 'react';
import {Facebook} from "lucide-react"
import {Twitter} from "lucide-react"
import {Instagram} from "lucide-react"
const Footer = () => {
  return (
    <footer className="bg-[#031227] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mb-8 p-6 rounded-lg bg-gradient-to-br from-black via-black to-blue-900 shadow-lg">
  <h2 className="text-2xl font-bold text-white">BLACKBAIN</h2>
  <p className="mt-4 text-sm text-gray-300">
    Dive into industry insights, trends, and expert advice in our comprehensive blog section.
    Stay informed and inspired as we share valuable knowledge to navigate the world of real estate.
  </p>
  <div className="flex space-x-4 mt-6">
    {/* Social Icons */}
    <a href="#" className="text-gray-400 hover:text-white">
    <Facebook />
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
    <Twitter />
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
    <Instagram />
    </a>
  </div>
  <p>Samson Properties</p>
</div>


        {/* Property Types */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PROPERTY TYPES</h3>
          <ul className="space-y-2">
            <li>Office Space</li>
            <li>Retail</li>
            <li>Industrial</li>
            <li>Hospitality</li>
            <li>Special Purpose</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
          <ul className="space-y-2">
            <li>Home Estimate</li>
            <li>Contact Us</li>
            <li>Search</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>Market Research & Analysis</li>
            <li>Deal Structuring & Negotiation</li>
            <li>Due Diligence & Data Analysis</li>
            <li>Transaction Advisory</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-12">
        <div className="max-w-4xl mx-auto p-6 rounded-md">
          <h3 className="text-lg font-bold text-white">SUBSCRIBE TO OUR NEWSLETTER.</h3>
          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Please enter your email"
              className="p-3 w-full lg:w-auto flex-grow rounded-md text-black"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full ml-2 hover:bg-blue-700">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-sm text-gray-400 text-center space-y-2 lg:flex lg:justify-between lg:items-center lg:space-y-0">
        <p>© 2024 BlackBain. All rights reserved.</p>
        <p>Company address should be here. Company address should be here...</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
