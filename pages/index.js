import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import { allBrandsQuery } from "../lib/sanity/allBrandsQuery.js"
import MainHead from "../components/MainHead";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Portal from "../components/Portal"
export default function Home({  posts, allBrands }) {
  const first = posts[0];
  const rest = posts.slice(1);
  return (
    <Layout brands={allBrands}>
        <MainHead />
        <Portal/>
    </Layout>
  
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(homeQuery);
  const allBrands = await client.fetch(allBrandsQuery)
  return {
    props: {
      posts,
      allBrands
    },
  };
}
