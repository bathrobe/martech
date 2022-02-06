import groq from "groq"; export const allBrandsQuery = groq` *[_type == "brand"]{
    _id,
    _type,
    title,
    "slug": slug.current,

  }
`
