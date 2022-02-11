import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-300 flex flex-col pt-12">
          <div className="flex justify-evenly md:justify-center pb-12 items-center">
           <Link className="mx-8" href="/blog">
            <a className="text-black px-4 text-sm md:text-lg font-normal uppercase">
              Blog
            </a>
    </Link>
          <Link className="mx-8" href="/interviews">
            <a className="text-black mx-2 text-sm md:text-lg   px-0 md:px-4 py-1  font-normal uppercase">
              Interviews
            </a>
      </Link>
          <Link className="mx-8" href="/whitepapers">
            <a className="text-black mx-2 text-sm md:text-lg px-0 md:px-4 py-1    font-normal uppercase">
              whitepaper
            </a>
          </Link>
          <Link className="mx-8" href="/about">
            <a className="text-black mx-2 text-sm md:text-lg px-0 md:px-4 py-1   font-normal uppercase">
              about
            </a>
            </Link>
          </div>
        <div className="flex flex-col max-w-2xl mx-auto">
        <div className="">
            <img src="/r_logo.webp" alt="logo" />
        </div>
          <div className="flex my-4">
              <a href="https://twitter.com/martechrecord">
              <img className="px-5" src="/twitter.svg" alt="logo" />
            </a><a  href="https://www.linkedin.com/company/martech-record/">
              <img className="px-5" src="/linkedin.svg" alt="logo" />
            </a>
        </div>
        </div>
      <p className="text-gray-500 font-thin text-sm">© 2022 Martech Record</p>
    </footer>
  );
}
