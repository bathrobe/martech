import React from "react";
import Layout from "../components/Layout";
import { allBrandsQuery} from "../lib/sanity/allBrandsQuery.js"
import { client } from "../lib/sanity/client";
import PortableText from "react-portable-text";
export default function about({ about, allBrands }) {
  return (
    <>
    <Layout brands={allBrands}>
      <div className="max-w-container mx-auto">
        <h1 className="py-8 pb-12 text-black text-5xl font-serif">
          {about?.title}
        </h1>
        <PortableText
          content={about?.body}
          serializers={{
            h1: (props) => <h1 className="text-4xl pt-12 pb-4" {...props} />, h2: (props) => <h2 className="text-3xl pt-10 pb-4" {...props} />,
            h3: (props) => <h2 className="text-2xl pt-8 pb-4" {...props} />,
            h4: (props) => <h2 className="text-xl pt-6 pb-4" {...props} />,
            normal: (props) => (
              <p className="py-2 font-thin text-xl" {...props} />
            ),
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
      </div>
    </Layout></>
  );
}
export async function getStaticProps({ params }) {
  const about = await client.fetch(`*[_type == "aboutPage"][0]`);
const allBrands = await client.fetch(allBrandsQuery)
  return {
    props: {
      allBrands,
      about
    },
  };
}
