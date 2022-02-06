import Layout from "../components/Layout.jsx"
import groq from "groq"
import {client} from "../lib/sanity/client.js"
import PostCard from "../components/PostCard.jsx"
import { allBrandsQuery} from "../lib/sanity/allBrandsQuery.js"
const Videos = ({content, allBrands}) => {
  return (
    <Layout  brands={allBrands}>
<h1 className="text-4xl font-semibold mt-12 max-w-container mx-auto font-serif">Video Interviews</h1>
      <h3 class="text-2xl font-sans mt-4 mb-8 font-light max-w-container mx-auto">Interviews in video form from top industry experts.</h3>
  {content?.map(p=>{
    return <PostCard post={p}/>
  })}
    </Layout>
  )
}

export default Videos

export async function getStaticProps() {
const allBrands = await client.fetch(allBrandsQuery)
const content = await client.fetch(`*[_type == "videoInterview"]{
_type,
title,
brand->,
"slug":slug.current,
description,
publishedAt,
}`);
  return {
    props: {
      allBrands,
      content
    },
  };
}


