import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import MainHead from "../components/MainHead";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { allBrandsQuery } from "../lib/sanity/allBrandsQuery.js"
export default function Home({  posts }) {
  const first = posts[0];
  const rest = posts.slice(1);
  return (
    <Layout brands={posts?.map(p=>p?.brand)}>
      <main>
        <MainHead />
        <PostCard post={first} first={true} />
        {rest.map((p) => (
          <PostCard post={p} />
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(homeQuery);
  return {
    props: {
      posts,
    },
  };
}
