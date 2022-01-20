import groq from "groq";

export const postQuery = groq`
  *[slug.current == $slug][0]{
    _id,
    _type,
    title,
    videoUrl,
    description,
    publishedAt,
    "slug": slug.current,
    "brand": brand->,
    mainImage,
    body,
  }
`;
