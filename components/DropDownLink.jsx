import Link from "next/link"
const DropDownLink = ({brand}) => {
  console.log("from ddl", brand?.slug)
  return (
    <Link href={`/${brand?.slug}`}>
   <a class=" bg-brand-gold hover:text-yellow-700 transition duration-300 py-2 px-4 block whitespace-no-wrap px-4"> {brand?.title}</a> 
    </Link>
  )
}

export default DropDownLink
