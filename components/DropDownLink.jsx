import Link from "next/link"
const DropDownLink = ({brand}) => {
  return (
    <Link href={`/${brand?.slug}`}>
   <a class=" bg-brand-gold hover:text-yellow-700 transition duration-300 py-2 px-2 w-18 sm:w-24 block whitespace-no-wrap px-4"> {brand?.title}</a> 
    </Link>
  )
}

export default DropDownLink
