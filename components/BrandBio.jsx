import PortableText from "react-portable-text";
import React from "react";
import urlFor from "../lib/sanity/urlFor";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
export default function BrandBio({ brand, brandPage = false }) {
  return (
    <figure
      className={` ${
        brandPage ? "mb-8" : "mb-12"
      } mt-12 mx-auto px-4`}
    >
      {brandPage ? "" : <hr className="text-gray-800 mb-10" />}
      {brandPage ? <img src={urlFor(brand?.logo).width(300)}/> : <Link href={`../${brand?.slug.current}`}>
        <a className="underline">
          <img src={urlFor(brand?.logo).width(300)} />
        </a>
      </Link>}
      {brand?.description ? (
        <PortableText
          content={brand?.description}
          serializers={{
            h1: (props) => <h1 className="text-4xl pt-12 pb-4" {...props} />,
            h2: (props) => <h2 className="text-3xl pt-10 pb-4" {...props} />,
            h3: (props) => <h2 className="text-2xl pt-8 pb-4" {...props} />,
            h4: (props) => <h2 className="text-xl pt-6 pb-4" {...props} />,
            normal: (props) => <p className="py-2 font-light" {...props} />,
            blockquote: (props) => (
              <blockquote className="pl-4 text-gray-500 text-2xl" {...props} />
            ),
            ul: (props) => (
              <ul className="pl-4 ml-8 py-4 list-disc" {...props} />
            ),
            ol: (props) => <ol className="list-decimal" {...props} />,
            link: (props) => (
              <a className="underline decoration-1" {...props} />
            ),
            image: (props) => (
              <img
                src={urlFor(props.asset._ref)}
                alt="post image"
                className="py-14"
              />
            ),
          }}
        />
      ) : (
        ""
      )}
    </figure>
  );
}
