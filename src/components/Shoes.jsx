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

export default function Shoes() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL SHOES</h1>
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
              <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" />
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL SHOES</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/815gwQgg1NL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men's Gel-Contend 4B+ Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,999</span></div>
                </div>
                <div>(45% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61xifWBcKiL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,537</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,699</span></div>
                </div>
                <div>(46% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81npMS2txhL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,474</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,999</span></div>
                </div>
                <div>(45% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/819k64abIbL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Mens Gel-Contend 4b Running Shoe</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,499</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61uFmm9kFWL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Sports Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between"> */}
                {/* <span>₹ <span className='font-semibold lg:text-[20px]'>2,249</span></span> */}
                {/* <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,499</span></div> */}
                {/* </div> */}
                {/* <div>(50% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61EwLD5o2YL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Suede Lace Up Running Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>3,499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹6,999</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61r0UIHrlNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>4,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹5,999</span></div>
                </div>
                <div>(30% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71nNM0fgjUL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Nivia</strong></div>
                <div className='text-justify'>Combat 2.0 Basketball Shoes for Mens | Phylon, Rubber &..</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,000</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹15,oo</span></div>
                </div>
                <div>(30% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/815gwQgg1NL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men's Gel-Contend 4B+ Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,999</span></div>
                </div>
                <div>(45% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61xifWBcKiL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,537</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,699</span></div>
                </div>
                <div>(46% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81npMS2txhL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,474</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,999</span></div>
                </div>
                <div>(45% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/819k64abIbL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Mens Gel-Contend 4b Running Shoe</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,499</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61uFmm9kFWL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Sports Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between"> */}
                {/* <span>₹ <span className='font-semibold lg:text-[20px]'>2,249</span></span> */}
                {/* <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,499</span></div> */}
                {/* </div> */}
                {/* <div>(50% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61EwLD5o2YL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Suede Lace Up Running Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>3,499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹6,999</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61r0UIHrlNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Asics</strong></div>
                <div className='text-justify'>Men Lace Up Running Shoes</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>4,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹5,999</span></div>
                </div>
                <div>(30% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71nNM0fgjUL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>Nivia</strong></div>
                <div className='text-justify'>Combat 2.0 Basketball Shoes for Mens | Phylon, Rubber &..</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,000</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹15,oo</span></div>
                </div>
                <div>(30% OFF)</div>
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
