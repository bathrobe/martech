import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown.jsx"
export default function Header({brands}) {
  return (
    <header className="sticky md:top-0 bg-black md:w-full">
      <nav className="py-4 flex items-center justify-between mx-auto md:max-w-container">
        <Link href="/">
          <a>
            <img className="mr-24" src="/Martech R White on Transparent.webp" />
          </a>
        </Link>
          <div className="flex items-center">
        <Link href="/blog">
          <a className="mx-2 md:mx-6 transition duration-300 hover:text-gray-400 text-white text-sm font-semibold uppercase">
            Blog
          </a>
        </Link>
        <Link href="/interviews">
          <a className="mx-2 md:mx-6 transition duration-300 hover:text-gray-400 text-white text-sm font-semibold uppercase">
            Interviews
          </a>
        </Link>            <Link href="/whitepapers">
          <a className="mx-2 md:mx-6 transition duration-300 hover:text-gray-400 text-white text-sm font-semibold uppercase">
       Whitepapers
        </a>
        </Link> <Dropdown brands={brands}/>
<Link href="/about">

          <a className="ml-4 transition duration-300 hover:text-gray-400 text-white text-sm font-semibold uppercase">
            About
          </a>
        </Link>
        </div>
      </nav>
      <div className="bg-brand-gold pb-4 text-brand-green"></div>
    </header>
  );
}
