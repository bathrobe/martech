import Link from "next/link";
import groq from "groq";
import { client } from "../../lib/sanity/client";
import urlFor from "../../lib/sanity/urlFor";
import { postQuery } from "../../lib/sanity/postQuery";
import Layout from "../../components/Layout";
import PostHead from "../../components/PostHead";
import BrandBio from "../../components/BrandBio";
import CTA from "../../components/CTA";
import PortableText from "react-portable-text";
import YouTube from "react-youtube";
import Employee from "../../components/Employee";
export default function Post({ post }) {
  // this strips the youtube video URL down to its ID
  let res = "";
  if (post?._type === "videoInterview") {
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = post?.videoUrl.match(regExp);
    if (match && match[2].length == 11) {
      res = match[2];
    } else {
      res = "Sorry, the URL uploaded was not a valid YouTube link.";
    }
  }

  return (
    <Layout>
      <PostHead
        title={post?.title}
        description={post?.description}
        brand={post?.brand}
      />
      <div className="max-w-container py-8 px-10 font-thin text-xl mx-auto">
        {post?._type === "videoInterview" ? (
          <YouTube className="my-8" videoId={res} />
        ) : (
          ""
        )}
        {post?._type === "whitepaper" ? (
          <div class="flex my-12 justify-center">
            <button
              type="button"
              onClick={() => {
                window.open(post?.whitepaper);
              }}
              className="text-white bg-gradient-to-r from-brand-green via-green-700 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Read {post?.title}
            </button>
          </div>
        ) : (
          ""
        )}
        {post?._type === "newHire" ? (
          <Employee employee={post?.employee} />
        ) : (
          ""
        )}
        {post?.body ? (
          <PortableText
            content={post?.body}
            serializers={{
              h1: (props) => <h1 className="text-4xl pt-12 pb-4" {...props} />,
              h2: (props) => <h2 className="text-3xl pt-10 pb-4" {...props} />,
              h3: (props) => <h2 className="text-2xl pt-8 pb-4" {...props} />,
              h4: (props) => <h2 className="text-xl pt-6 pb-4" {...props} />,
              normal: (props) => <p className="py-2" {...props} />,
              blockquote: (props) => (
                <blockquote
                  className="pl-4 text-gray-500 text-2xl"
                  {...props}
                />
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
        ) : (
          ""
        )}
      </div>
      <BrandBio brand={post?.brand} />
      <CTA />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await client.fetch(postQuery, {
    slug: params.slug,
  });
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[defined(slug.current && _type != brand)][]{
      "slug": slug.current,
        "brand": brand->{title, slug},
    }`
  );
  return {
    paths: paths.map((path) => ({
      params: { brand: path.brand.slug.current, slug: path.slug },
    })),
    fallback: true,
  };
}
