import Layout from "../components/Layout.jsx"
import groq from "groq"
import { client } from "../lib/sanity/client.js"
import PostCard from "../components/PostCard.jsx"
import { allBrandsQuery} from "../lib/sanity/allBrandsQuery.js"
const Interviews = ({content, allBrands}) => {
  return (
    <Layout  brands={allBrands}>
   
<h1 className="px-2 text-4xl font-semibold mt-12 max-w-container mx-auto font-serif">Interviews</h1>
      <h3 class="px-2 text-2xl font-sans mt-4 mb-8 font-light max-w-container mx-auto">Q and A's to help you make better decisions.</h3>
      {content?.map(p=>{
         return <PostCard post={p}/>
      })}
   
    </Layout>
  )
}

export default Interviews

export async function getStaticProps() {
  const content = await client.fetch(`*[_type == "textInterview"]{
_type,
publishedAt,
title,
"slug": slug.current,
brand->,
description,


}`);
const allBrands = await client.fetch(allBrandsQuery)
  return {
    props: {
      allBrands,
      content
    },
  };
}


