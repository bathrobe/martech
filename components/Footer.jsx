import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-300 flex flex-col pt-12">
          <div className="flex justify-evenly md:justify-center pb-12 items-center">
           <Link className="mx-8" href="/blog">
            <a className="text-black transition duration-300 hover:text-gray-400 px-4 text-sm md:text-lg font-normal uppercase">
              Blog
            </a>
    </Link>
          <Link className="mx-8" href="/interviews">
            <a className="text-black transition duration-300 hover:text-gray-400 mx-2 text-sm md:text-lg   px-0 md:px-4 py-1  font-normal uppercase">
              Interviews
            </a>
      </Link>
          <Link className="mx-8" href="/whitepapers">
            <a className="text-black transition duration-300 hover:text-gray-400 mx-2 text-sm md:text-lg px-0 md:px-4 py-1    font-normal uppercase">
              whitepaper
            </a>
          </Link>
            <a href="https://martechrecord.com/about" className="mx-8 text-black transition duration-300 hover:text-gray-400 mx-2 text-sm md:text-lg px-0 md:px-4 py-1   font-normal uppercase">
              about
            </a>
          </div>
        <div className="flex flex-col max-w-2xl mx-auto">
        <div className="">
            <img src="/r_logo.webp" alt="logo" />
        </div>
          <div className="flex my-8">
              <a target="_blank" href="https://twitter.com/martechrecord">
              <img className="px-5" src="/twit.webp" alt="logo" />
            </a><a target="_blank"  href="https://www.linkedin.com/company/martech-record/">
              <img className="px-5" src="/linked.webp" alt="logo" />
            </a>
        </div>
        </div>
      <p className="text-gray-500 font-thin text-sm">© 2022 Martech Record</p>
    </footer>
  );
}
