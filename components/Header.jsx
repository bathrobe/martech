import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown.jsx";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IconContext } from "react-icons";
import Tippy from "@tippyjs/react";
export default function Header({ brands }) {
  return (
    <header className="md:top-0 bg-black md:w-full  ">
      <div className="max-w-container px-2 py-3 mx-auto flex justify-between items-center ">
        <a className="" href="https://martechrecord.com">
          <img
            className="md:mr-8 py-1 md:px-3 "
            src="/Martech R White on Transparent.webp"
          />
        </a>
        <div className="flex flex-grow justify-evenly">
          <a
            href="https://martechrecord.com/industry-resources"
            className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium "
          >
            <Tippy
              interactive={true}
              interactiveBorder={2}
              duration={4}
              content={
                <a
                  className="bg-black p-2 text-sm text-white transition duration-300 hover:text-gray-400 "
                  href="https://www.martechrecord.com/affiliate-marketing-profiles"
                >
                  Affiliate Marketing Platform Profiles
                </a>
              }
            >
              <button
                onClick={() => {
                  window.open(
                    "https://martechrecord.com/industry-resources",
                    "_self"
                  );
                }}
                className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium uppercase"
              >
                ARTICLES
              </button>
            </Tippy>
          </a>
          <Tippy
            interactive={true}
            interactiveBorder={20}
            content={
              <a
                className="bg-black p-2 text-sm text-white transition duration-300 hover:text-gray-400 "
                href="https://www.martechrecord.com/summary-of-platforms-reviewed"
              >
                Summary of Platforms Reviewed
              </a>
            }
          >
            <button
              onClick={() => {
                window.open(
                  "https://martechrecord.com/affiliate-platform-guide",
                  "_self"
                );
              }}
              className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium uppercase"
            >
              BUYER'S GUIDE
            </button>
          </Tippy>
          <a
            href="https://martechrecord.com/our-events"
            className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium uppercase"
          >
            events
          </a>
          <a
            href="https://martechrecord.com/about"
            className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium uppercase"
          >
            about
          </a>
          <a
            href="https://martechrecord.com/sign-up"
            className="mx-1 sm:mx-6   transition duration-300 hover:text-gray-400 text-white text-xs lg:text-base font-medium uppercase"
          >
            sign up
          </a>
          <div className="flex justify-center items-center justify-self-end">
            <IconContext.Provider
              value={{ color: "white", className: "h-4 mx-1 sm:mx-5" }}
            >
              <a href="https://twitter.com/martechrecord">
                {" "}
                <FaTwitter />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "white", className: "h-4 ml-1 sm:ml-5" }}
            >
              <a href="https://www.linkedin.com/company/martech-record/">
                {" "}
                <GrLinkedinOption />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="bg-brand-gold">
        <nav className="py-2 flex  items-center justify-end pr-4 mx-auto max-w-container">
          <div className="flex items-end">
            <Link href="/blog">
              <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black text-xs md:text-sm text-xs font-medium uppercase">
                Blog
              </a>
            </Link>
            <Link href="/interviews">
              <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black md:text-sm text-xs font-medium uppercase">
                Interviews
              </a>
            </Link>{" "}
            <Link href="/whitepapers">
              <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black md:text-sm text-xs font-medium uppercase">
                Whitepapers
              </a>
            </Link>
            <Link href="/videos">
              <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black md:text-sm text-xs font-medium uppercase">
                Videos
              </a>
            </Link>
            <div className="ml-1 md:ml-6">
              <Dropdown brands={brands} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
