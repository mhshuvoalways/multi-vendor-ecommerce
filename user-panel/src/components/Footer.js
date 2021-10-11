import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-28 py-20">
      <div className="w-11/12 m-auto">
        <div className="flex gap-8 flex-wrap justify-between">
          <ul>
            <li className="text-lg">ABOUT US</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <ul>
            <li className="text-lg">USEFUL LINKS</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Support Policy</li>
          </ul>
          <ul>
            <li className="text-lg">FOLLOW US</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Linkedin</li>
            <li className="cursor-pointer">Twitter</li>
          </ul>
          <ul>
            <li className="text-lg">SUBSCRIBE</li>
            <li>
              Get E-mail updates about our latest shop and special offers.
            </li>
            <li className="mt-3">
              <input
                type="email"
                className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              />
            </li>
            <li className="mt-3">
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-purple-600 cursor-pointer text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
