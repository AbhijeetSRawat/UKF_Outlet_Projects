import React, { useState } from 'react'
import Container from '../pages/Container'
import { MdViewColumn } from 'react-icons/md'
import { PiColumnsFill } from 'react-icons/pi'
import { HiViewColumns } from 'react-icons/hi2'
import { FaThLarge } from 'react-icons/fa'
import { TfiLayoutColumn4Alt } from 'react-icons/tfi'
import { Link } from 'react-router'
import Sidebar from '../pages/Sidebar'
import SmallSidebar from '../pages/SmallSidebar'

export default function Partywear() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL PARTY WEAR</h1>
            <div className="w-full">
              {/* <video
                autoPlay
                muted
                playsInline
                loop
                controls
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/01659115-4a78-4ab0-be2e-bc79eb900630.mp4/productVideoOptimized.mp4" type="video/mp4" />

              </video> */}
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>

            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={70} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/31y1WmVsfjL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Net Fit and Flare Maxi Dress</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>899</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(55% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/515xoy-ROZL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Gorgette Regular Fit Full Length Embroided Dress...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>799</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(20% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/518vqdqyPoL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Gorgette Regular Fit Full Length Embroided Dress...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(5% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61MUt5JQGrL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Embroidered Georgette Semi-Stiched...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,099</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,999</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/612SnRAFO+S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Codding Long Anarkali Dress Material Gown...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,499</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81o2fz5SzWL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Anarkali Long Gown</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹5,999</span></div>
                </div>
                <div>(62% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={140} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61tURJ-3P3L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Calf-Length Dress, Elegant Polyester Fabric,...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71ZZU2YFQBL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Anarkali Maxi Gown</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>649</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,299</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={70} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/31y1WmVsfjL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Net Fit and Flare Maxi Dress</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>899</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(55% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/515xoy-ROZL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Gorgette Regular Fit Full Length Embroided Dress...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>799</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(20% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/518vqdqyPoL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Gorgette Regular Fit Full Length Embroided Dress...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(5% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61MUt5JQGrL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Embroidered Georgette Semi-Stiched...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,099</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹4,999</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/612SnRAFO+S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Codding Long Anarkali Dress Material Gown...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,499</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81o2fz5SzWL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-pink-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Anarkali Long Gown</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹5,999</span></div>
                </div>
                <div>(62% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={140} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61tURJ-3P3L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Calf-Length Dress, Elegant Polyester Fabric,...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71ZZU2YFQBL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Women's Anarkali Maxi Gown</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>649</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,299</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
            </div>
            {/* <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop
                controls
                className="w-full"
              >
                <source src="https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/AFXD1IN77MOSG/1663841548191/3fc234fc-8af9-4555-913c-91962cc08719/1663841554659sbv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" />
            </div> */}

            {/* <h1 className='my-5 font-semibold lg:text-4xl text-2xl'>Trending Now</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>



            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}    