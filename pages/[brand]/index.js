import React from "react";
import { brandQuery } from "../../lib/sanity/brandQuery";
import { client } from "../../lib/sanity/client";
import groq from "groq";
import Layout from "../../components/Layout";
import BrandBio from "../../components/BrandBio";
export default function Brand({ brand }) {
  return (
    <Layout>
      <BrandBio brand={brand} />
      All this brand's posts will go here!
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const brand = await client.fetch(brandQuery, { slug: params.brand });
  return {
    props: {
      brand,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[defined(slug.current && _type == brand)][]{
        "slug": slug.current,
      }`
  );

  return {
    paths: paths.map((path) => ({ params: { slug: path.slug.current } })),
    fallback: true,
  };
}
