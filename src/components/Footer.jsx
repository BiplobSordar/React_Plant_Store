import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full lg:h-[432px] h-auto mt-20">
      <div className="max-w-[1400px] mx-auto px-4 h-full">

        <div className="max-w-[1440px] h-[88%]  mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 content-evenly">


          <div>
            <h3 className="font-bold text-lg mb-4">Plant Store</h3>
            <p className="space-y-2 text-[#A1A1AA]">

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

      
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Contact Saled</a></li>

            </ul>
          </div>

     
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Customer Stories</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Download Apps</a></li>

            </ul>
          </div>

        
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400  text-[#A1A1AA] transition">Join Us</a></li>

            </ul>
          </div>

         


          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400 text-[#A1A1AA] transition">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-blue-600">
                  <FaFacebookF size={16} />
                </div>
                @PS — Facebook
              </li>

              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400 text-[#A1A1AA] transition">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-pink-500">
                  <FaInstagram size={16} />
                </div>
                @PS — Instagram
              </li>

              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400 text-[#A1A1AA] transition">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-sky-500">
                  <FaTwitter size={16} />
                </div>
                @PS — Twitter
              </li>

              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400 text-[#A1A1AA] transition">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-red-500">
                  <FaEnvelope size={16} />
                </div>
                support@cst.com
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t h-[10%] border-gray-800 py-4  text-center text-gray-400 text-sm">
         © 2025 PS — Plant Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;