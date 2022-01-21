import React from "react";
import PortableText from "react-portable-text";
import urlFor from "../lib/sanity/urlFor";
export default function Employee({ employee }) {
  return (
    <div className="md:flex justify-center items-center my-10">
      <img className="pr-6" src={urlFor(employee?.image)} />
      <div className="pl-8">
        <h2 className="text-3xl text-black pb-2 font-serif">
          {employee?.name}
        </h2>
        <h4 className="text-2xl font-serif pb-2">{employee?.jobTitle}</h4>
        <PortableText
          className="text-xl"
          content={employee?.bio}
          serializers={{
            h1: (props) => <h1 className="text-4xl pt-12 pb-4" {...props} />,
            h2: (props) => <h2 className="text-3xl pt-10 pb-4" {...props} />,
            h3: (props) => <h2 className="text-2xl pt-8 pb-4" {...props} />,
            h4: (props) => <h2 className="text-xl pt-6 pb-4" {...props} />,
            normal: (props) => <p className="text-2xl py-2" {...props} />,
            blockquote: (props) => (
              <blockquote className="pl-4 text-gray-500 text-2xl" {...props} />
            ),
            ul: (props) => (
              <ul className="pl-4 ml-8 py-4 list-dic" {...props} />
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
      </div>
    </div>
  );
}
