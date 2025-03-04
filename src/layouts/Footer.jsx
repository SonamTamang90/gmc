import React from "react";
import {
  FaRegPaperPlane,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router";
import Divider from "../ui/Divider";

const Footer = () => {
  return (
    <footer className="">
      <Divider backgroundColor="bg-black/10 mx-6" />
      <p className="mt-3 pr-14 text-right text-xs text-gray-600">
        Copyright &copy; 2024 Gelephu Mindfulness City
      </p>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 gap-16 pb-16 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col space-y-8">
            <div className="h-24 w-24">
              <div className="grid h-full w-full">
                <img src="/images/logo.png" alt="GMC logo" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-800 uppercase">
                CONNECT WITH US
              </h3>
              <p className="mt-2 text-sm text-gray-600">info@gmc.bt</p>
            </div>

            {/* Newsletter Section */}
            <div className="max-w-md">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-800 uppercase">
                NEWSLETTER
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Subscribe to our newsletter and stay updated with the latest
                news and events.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="flex-grow rounded-l-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:outline-none"
                />
                <button
                  aria-label="Subscribe"
                  type="button"
                  className="rounded-r-md bg-blue-900 px-4 py-2 text-white transition duration-200 hover:bg-blue-800"
                >
                  <FaRegPaperPlane size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-11 md:items-end">
            <div className="max-w-xs text-right">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">FAQs</h3>
              <p className="pl-14 text-gray-700 md:text-right">
                Follow us on social media and keep in touch with Gelephu
                Mindfulness City for more information and updates
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex space-x-4 md:mt-0">
              <a
                href="#"
                className="rounded-full bg-blue-900 p-2.5 text-white transition duration-200 hover:bg-blue-800"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-900 p-2.5 text-white transition duration-200 hover:bg-blue-800"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-900 p-2.5 text-white transition duration-200 hover:bg-blue-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Divider backgroundColor="bg-black/10" />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Engage</Link>
          </li>
          <li>
            <Link to="#">Announcements</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
