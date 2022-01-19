import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <>
      {" "}
      <header className="bg-black py-4">
        <nav className="flex items-center justify-between mx-auto max-w-container">
          <Link href="/">
            <a>
              <img
                className="mr-24"
                src="/Martech R White on Transparent.webp"
              />
            </a>
          </Link>
          <Link href="">
            <a className="text-white text-sm font-semibold uppercase">Blog</a>
          </Link>

          <Link href="">
            <a className="text-white text-sm font-semibold uppercase">
              Interviews
            </a>
          </Link>

          <Link href="">
            <a className="text-white text-sm font-semibold uppercase">
              Whitepapers
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white text-sm font-semibold uppercase">About</a>
          </Link>
        </nav>
      </header>
      <div className="bg-brand-green text-brand-green">Martech Record 2022</div>
    </>
  );
}
