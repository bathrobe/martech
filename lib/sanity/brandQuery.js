import groq from "groq";
export const brandQuery = groq`
  *[slug.current == $slug][0]{
    _id,
    _type,
    title,
    description,
    "slug": slug.current,
    logo,
    "posts": *[references(^._id)]

  }
`;
