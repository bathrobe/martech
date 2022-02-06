import Link from "next/link"
const Portal = () => {
  return (
    <div className="-mt-36 max-w-container mx-auto">
      <section class=" bg-white text-gray-600 body-font">
  <div class="container px-5 pt-12 pb-16 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
<Link href="/blog"><a><img className="text-gray-700" src="/book-open.svg"/>
</a></Link>                              </div>
          <Link href="/blog"><a>          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Longform Posts</h2>
          <p class="leading-relaxed text-base">Longform content from our trusted partners on all things affiliate.</p>
 </a></Link>
       </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
<Link href="/interviews"><a><img className="text-gray-700" src="/message-circle.svg"/>
</a></Link>                           </div>
          <Link href="/interviews"><a>          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Q & A with Industry Leaders</h2>
          <p class="leading-relaxed text-base">Learn from leading affiliate marketers in these exclusive  interviews.</p>
 </a></Link>
       </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
<Link href="/whitepapers"><a><img className="text-gray-700" src="/file-text.svg"/>
</a></Link>
                           </div>
          <Link href="/whitepapers"><a>          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Whitepapers</h2>
          <p class="leading-relaxed text-base">Read the latest insights and forecasts from top affiliate marketers.</p>
 </a></Link>
       </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
                <Link href="/videos"><a><img className="text-gray-700" src="/film.svg"/>
</a></Link>           </div>
          <Link href="/videos"><a>          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Videos</h2>
          <p class="leading-relaxed text-base">Interviews in video form from top industry experts. Get up to speed in record time.</p>
 </a></Link>
       </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
                 <Link href="/newhires"><a ><img className="text-gray-700" src="/user.svg"/>
</a></Link>          </div>
          <Link href="/newhires"><a> <h2 class="text-lg text-gray-900 font-medium title-font mb-2">New Hires</h2>
          <p class="leading-relaxed text-base">Find out more about new team members across our partner firms.</p>
        </a></Link>
         </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-green-500 mb-4">
<Link href="/about"><a><img className="text-gray-700" src="/info.svg"/>
</a></Link>                           </div>
          <Link href="/about"><a>          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">About Martech</h2>
          <p class="leading-relaxed text-base">Learn more about the Martech Record, a decision maker's best resource.</p>
 </a></Link>
       </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Portal
