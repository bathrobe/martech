import 'react-dropdown/style.css'
import DropDownLink from "./DropDownLink.jsx"
import {client} from "../lib/sanity/client.js" 
import {allBrandsQuery} from "../lib/sanity/allBrandsQuery.js"
export default function Dropdown(brands){
  let brandList = brands?.brands?.map(b=>{
    return  <DropDownLink brand={b}/>
  })
  return   (  <div class="transition duration-300 hover:text-black text-black md:text-sm text-xs  ">
      <div className="group inline-block relative">
        <button
          className="my-0 py-0 transition duration-300  hover:text-yellow-700 bg-brand-gold text-black uppercase text-xs md:text-sm   inline-flex justify-between "

        >
          <span className="mr-1">Partners</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="absolute hidden text-black  pt-1 group-hover:block">
        {brandList}
       </ul>
      </div>
    </div>)}

