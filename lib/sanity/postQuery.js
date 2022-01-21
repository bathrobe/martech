import groq from "groq";

export const postQuery = groq`
  *[slug.current == $slug][0]{
    _id,
"whitepaper": whitepaperPdf.asset->url,
    _type,
    title,
    videoUrl,
    employee,
    description,
    publishedAt,
    "slug": slug.current,
    "brand": brand->,
    mainImage,
    body,
  }
`;
