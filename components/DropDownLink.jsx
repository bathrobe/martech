import Link from "next/link"
const DropDownLink = ({brand}) => {
  return (
    <Link href={brand?.slug.current}>
   <a class=" bg-black hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap px-4"> {brand?.title}</a> 
    </Link>
  )
}

export default DropDownLink
