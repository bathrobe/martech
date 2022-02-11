import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown.jsx"
export default function Header({brands}) {
  return (
    <header className="md:top-0 bg-black md:w-full  ">
      <div className="max-w-container px-2 py-2 mx-auto flex justify-between items-center ">
  <a className="" href="https://martechrecord.com">
            <img className="mr-8 py-1 px-3 " src="/Martech R White on Transparent.webp" />
          </a>
     <div className="flex justify-between">
  <a href="https://martechrecord.com/industry-resources" className="mx-1 sm:mx-6 transition duration-300 hover:text-gray-400 text-white text-xs md:text-lg font-medium uppercase">
articles
            </a>
   <a href="https://martechrecord.com/affiliate-platform-guide" className="mx-1 sm:mx-6 transition duration-300 hover:text-gray-400 text-white text-xs md:text-lg font-medium uppercase">
            buyer's guide
            </a>
    <a href="https://martechrecord.com/our-events" className="mx-1 sm:mx-6 transition duration-300 hover:text-gray-400 text-white text-xs md:text-lg font-medium uppercase">
            events
            </a>
     <a href="https://martechrecord.com/about" className="mx-1 sm:mx-6 transition duration-300 hover:text-gray-400 text-white text-xs md:text-lg font-medium uppercase">
            about
            </a>
      <a href="https://martechrecord.com/sign-up" className="ml-1 md:ml-6 transition duration-300 hover:text-gray-400 text-white text-xs md:text-lg font-medium uppercase">
            sign up
            </a>
                      
        </div>

      </div>
        <div className="bg-brand-gold">
         <nav className="py-2 flex  items-center justify-end mx-auto max-w-container">
       
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
        </Link>            <Link href="/whitepapers">
          <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black md:text-sm text-xs font-medium uppercase">

       Whitepapers
        </a>
        </Link>
<Link href="/videos">

          <a className="mx-1 md:mx-6 transition font-medium font-light duration-300 hover:text-yellow-700 text-black md:text-sm text-xs font-medium uppercase">
            Videos
          </a>
            </Link>
        <div className="ml-1 md:ml-6">< Dropdown brands={brands}/></div> 

        </div>
      </nav>

      </div>
    </header>
  );
}
