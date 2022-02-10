import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-300 pt-12">
      <div className="flex mx-auto justify-center ">
        <div className="flex flex-col  items-center ">
<div className="mb-12">
            <img src="clean_r_logo.png" alt="logo" />
            <div className="flex justify-between mt-8">
              <a target="_blank" href="https://twitter.com/martechrecord">
              <img className="px-5" src="/twitter.svg" alt="logo" />
            </a><a target="_blank" href="https://www.linkedin.com/company/martech-record/">
              <img className="px-5" src="/linkedin.svg" alt="logo" />
            </a>
            </div>
          </div>

         <div className="flex flex-col md:flex-row"> 
          <Link className=" " href="/blog">
            <a className="text-black   px-0 md:px-4 py-1 font-normal uppercase">
              Blog
            </a>
          </Link>
          <Link className=" " href="/interviews">
            <a className="text-black   px-0 md:px-4 py-1  font-normal uppercase">
              Interviews
            </a>
          </Link>
          <Link className=" " href="/whitepapers">
            <a className="text-black px-0 md:px-4 py-1    font-normal uppercase">
              whitepaper
            </a>
          </Link>
          <Link className=" " href="/about">
            <a className="text-black px-0 md:px-4 py-1   font-normal uppercase">
              about
            </a>
          </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 font-thin text-sm">© 2022 Martech Record</p>
    </footer>
  );
}
