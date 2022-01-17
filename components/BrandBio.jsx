import PortableText from "react-portable-text";
import React from "react";
import urlFor from "../lib/sanity/urlFor";
import BlockContent from "@sanity/block-content-to-react";
export default function BrandBio({ brand }) {
  return (
    <figure className="max-w-container mx-auto px-20 mb-10">
      <hr className="text-gray-400 pt-12" />
      <img src={urlFor(brand?.logo).width(300)} />
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
