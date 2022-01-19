import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-300 pt-12">
      <div className="flex mx-auto justify-center max-w-container">
        <div className="flex items-center justify-evenly">
          <Link className="mx-4" href="">
            <a className="text-black px-4 text-lg font-normal uppercase">
              Blog
            </a>
          </Link>
          <Link className="mx-4" href="">
            <a className="text-black px-4 text-lg pr-8 font-normal uppercase">
              Interviews
            </a>
          </Link>
          <div className="mb-12">
            <img src="/r_logo.webp" alt="logo" />
            <div className="flex mt-4">
              <img className="px-5" src="/twitter.svg" alt="logo" />
              <img className="px-5" src="/linkedin.svg" alt="logo" />
            </div>
          </div>
          <Link className="mx-4" href="">
            <a className="text-black text-lg px-4 pl-8 font-normal uppercase">
              whitepaper
            </a>
          </Link>
          <Link className="mx-4" href="">
            <a className="text-black text-lg px-4 font-normal uppercase">
              about
            </a>
          </Link>
        </div>
      </div>
      <p className="text-gray-500 font-thin text-sm">© 2022 Martech Record</p>
    </footer>
  );
}
