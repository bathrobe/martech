import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
export default function PostCard({
  brand,
  first = false,
  brandPage = false,
  post,
}) {
  return (
    <div
      className={`max-w-2xl px-14 mx-auto bg-white ${first ? "-mt-14" : ""}`}
    >
      <article key={post?._id}>
        <p className="text-brand-green text-sm pt-2 pb-4">
          {dayjs(post?.publishedAt).format("MMM D, YYYY")}
        </p>
        <p className="text-gray-800 text-md font-light pb-4">
          {post?.brand?.title}
        </p>
        <Link
          href={
            brandPage
              ? `${brand?.slug}/${post?.slug?.current}`
              : `/${post?.brand?.slug?.current}/${post?.slug}`
          }
        >
          <a className="font-serif font-semibold text-5xl">{post?.title}</a>
        </Link>
        <p className="font-extralight text-3xl pb-8 pt-6">
          {post?.description}
        </p>
        <Link href={`/${post?.brand?.slug?.current}/${post?.slug}`}>
          <a className="font-normal italic text-gray-400 text-2xl">Read more</a>
        </Link>
      </article>
      <hr className="mt-6 text-gray-900 pt-16" />
    </div>
  );
}
