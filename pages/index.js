import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import MainHead from "../components/MainHead";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
export default function Home({ posts }) {
  return (
    <Layout>
      <main>
        <MainHead />
        {posts.map((post) => (
          <PostCard post={post} />
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
