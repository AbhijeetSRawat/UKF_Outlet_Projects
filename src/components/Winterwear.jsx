import React, { useState } from 'react'
import Container from '../pages/Container'
import { MdViewColumn } from 'react-icons/md'
import { PiColumnsFill } from 'react-icons/pi'
import { HiViewColumns } from 'react-icons/hi2'
import { FaThLarge } from 'react-icons/fa'
import { TfiLayoutColumn4Alt } from 'react-icons/tfi'
import { Link } from 'react-router'
import SmallSidebar from '../pages/SmallSidebar'
import Sidebar from '../pages/Sidebar'

export default function Winterwear() {
  const [open, setOpen] = useState(null);
  const [open1, setOpen1] = useState(false)
  const toggle = (val) => {
    setOpen(open == val ? null : val)
  }
  return (
    <div className='w-full'>
      <Container>

        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1">
          <div className="block md:hidden "><SmallSidebar /></div>
          <div className="md:block hidden "><Sidebar /></div>
          <div className="lg:col-span-4 md:col-span-3">
            <div className="hidden md:flex mb-2 items-center justify-between gap-3">
              <div className='p-2 border border-gray-400 cursor-pointer outline-none relative'>
                <div onClick={() => setOpen1(!open1)}>Select Category</div>
                <div className={`absolute space-y-2 py-2  top-10 left-0 bg-white  duration-500 ${open1 == true ? "block" : "hidden"}`}>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/perfume'}>Perfume</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/wallet'}>Wallet</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/belt'}>Belt</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/shoes'}>Shoes</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/winterwear'}>Winter wear</Link></div>
                  <div className='px-5 hover:bg-gray-400 whitespace-nowrap' onClick={() => setOpen1(false)}><Link to={'/summerwear'}>Summer wear</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/pent'}>Pent</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/shirt'}>Shirt</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/jeans'}>Jeans</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/tshirt'}>Tshirt</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/ethnicwear'}>Ethnic wear</Link></div>
                  <div className='px-5 hover:bg-gray-400' onClick={() => setOpen1(false)}><Link to={'/partywear'}>Party wear</Link></div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2">
                <PiColumnsFill className={`cursor-pointer ${open == 'one' ? 'text-[#ecba49]' : ""}`} onClick={() => toggle('one')} />
                <HiViewColumns className={`cursor-pointer ${open == 'two' ? 'text-[#ecba49]' : ""}`} onClick={() => toggle('two')} />
                <TfiLayoutColumn4Alt className={`cursor-pointer ${open == 'three' ? 'text-[#ecba49]' : ""}`} onClick={() => toggle('three')} />
              </div>
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL WINTER WEAR</h1>
            <div className="w-full">
              {/* <video
                autoPlay
                muted
                playsInline
                loop
                controls
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9256527f-ea69-4e07-baf0-8cc091552f35.mp4/productVideoOptimized.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL WINTER WEAR</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61BdYFnS+UL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Boldfit Winter Cap With Neck Warmer & Gloves Set - Beanie...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹699</span></div>
                </div>
                <div>(43% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71A7tYnlJuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Unisex-Adult BFWCS001BLUEBLACK_Blue-Black...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹799</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61wWVS-32dL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Kandid Wool Beanie Cap, Muffler & Gloves Set for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>285</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(71% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51Aq1MPXuFL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Vtflair</strong></div>
                <div className='text-justify'>Winter Woolen Beanie Cap Scarf and Touch Screen Gloves...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>270</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹899</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71-ztzeMTIL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Wearslim</strong></div>
                <div className='text-justify'>Warm Knit Hats, Skull Cap with Neck Warmer Winter Wear...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>265</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,199</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/41+sS51LyrL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Generic</strong></div>
                <div className='text-justify'>GIFFEMANS Winter Knit Beanie Air Proof Woolen Hat for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,299</span></div>
                </div>
                <div>(81% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/513g0gxLruL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Alampar</strong></div>
                <div className='text-justify'>Woolen Winter Cap for Men Woolen Cap for Thermal Wea...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>229</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(62% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71J3yY+W4AL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Llsha</strong></div>
                <div className='text-justify'>Winter Wear for Men and Women Winter Woolen Cap f...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>196</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹600</span></div>
                </div>
                <div>(67% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>

            </div>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/AFXD1IN77MOSG/1663841548191/3fc234fc-8af9-4555-913c-91962cc08719/1663841554659sbv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61BdYFnS+UL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Boldfit Winter Cap With Neck Warmer & Gloves Set - Beanie...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹699</span></div>
                </div>
                <div>(43% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71A7tYnlJuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Unisex-Adult BFWCS001BLUEBLACK_Blue-Black...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹799</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61wWVS-32dL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Boldfit</strong></div>
                <div className='text-justify'>Kandid Wool Beanie Cap, Muffler & Gloves Set for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>285</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(71% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51Aq1MPXuFL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Vtflair</strong></div>
                <div className='text-justify'>Winter Woolen Beanie Cap Scarf and Touch Screen Gloves...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>270</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹899</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71-ztzeMTIL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Wearslim</strong></div>
                <div className='text-justify'>Warm Knit Hats, Skull Cap with Neck Warmer Winter Wear...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>265</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,199</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/41+sS51LyrL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Generic</strong></div>
                <div className='text-justify'>GIFFEMANS Winter Knit Beanie Air Proof Woolen Hat for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,299</span></div>
                </div>
                <div>(81% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/513g0gxLruL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Alampar</strong></div>
                <div className='text-justify'>Woolen Winter Cap for Men Woolen Cap for Thermal Wea...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>229</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(62% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71J3yY+W4AL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Llsha</strong></div>
                <div className='text-justify'>Winter Wear for Men and Women Winter Woolen Cap f...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>196</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹600</span></div>
                </div>
                <div>(67% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>

            </div>
            {/* <h1 className='my-5 font-semibold lg:text-4xl text-2xl'>Trending Now</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>



            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
} 