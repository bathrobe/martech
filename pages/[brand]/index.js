import React from "react";
import { brandQuery } from "../../lib/sanity/brandQuery";
import { client } from "../../lib/sanity/client";
import groq from "groq";
import Layout from "../../components/Layout";
import BrandBio from "../../components/BrandBio";
import PostCard from "../../components/PostCard";
export default function Brand({ brand }) {
  return (
    <Layout>
      <BrandBio brandPage={true} brand={brand} />

      {brand?.posts.map((p) => {
        return <PostCard brand={brand} post={p} brandPage={true} />;
      })}
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
