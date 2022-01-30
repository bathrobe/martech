import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown.jsx"
export default function Header({brands}) {
  return (
    <header className="sticky top-0 bg-black">
      <nav className="py-4 flex items-center justify-between mx-auto max-w-container">
        <Link href="/">
          <a>
            <img className="mr-24" src="/Martech R White on Transparent.webp" />
          </a>
        </Link>
          <div className="flex">
          <Dropdown brands={brands}/>
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
