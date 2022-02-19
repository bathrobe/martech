import Layout from "../components/Layout.jsx"
import groq from "groq"
import {client} from "../lib/sanity/client.js"
import PostCard from "../components/PostCard.jsx"
import { allBrandsQuery} from "../lib/sanity/allBrandsQuery.js"
const NewHires = ({content, allBrands}) => {
  return (
    <Layout  brands={allBrands}>
<h1 className="px-2 text-4xl font-semibold mt-12 max-w-container mx-auto font-serif">New Hires</h1>
      <h3 class="px-2 text-2xl font-sans mt-4 mb-8 font-light max-w-container mx-auto"> Find out more about the new team members all across our partner firms.</h3>
  {content?.map(p=>{
    return <PostCard post={p}/>
  })}
    </Layout>
  )
}

export default NewHires

export async function getStaticProps() {
const allBrands = await client.fetch(allBrandsQuery)
const content = await client.fetch(`*[_type == "newHire"] | order(publishedAt desc) {
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


