import groq from "groq";

export const homeQuery = groq`
  *[_type == "longformPost" || _type == "newHire" || _type == "textInterview" || _type == "videoInterview" || _type == "whitepaper" ] {
    _id,
    _type,
    title,
    description,
    publishedAt,
    "slug": slug.current,
    brand->{title, slug},
    mainImage,
    body,
  }
`;
