import React from "react";
import Link from "next/link";
export default function PostHead({ title, description, brand }) {
  return (
    <section className="max-w-container mx-auto pt-12 flex flex-col justify-between bg-gray-500  px-4 md:px-14 py-8">
      <h1 className="text-5xl text-white font-serif font-semibold">{title}</h1>
      <h2 className="text-3xl py-10 text-white font-serif font-medium">
        {description}
      </h2>
      <p className="text-white text-xl">
        Sponsored Content brought to you by{" "}
        <Link href={`../${brand?.slug.current}`}>
          <a className="underline">{brand?.title}</a>
        </Link>
      </p>
    </section>
  );
}
