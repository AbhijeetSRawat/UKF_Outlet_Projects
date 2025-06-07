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

export default function Pent() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL PENT</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/479677514190/123f059f-6de6-454c-931f-72222c3993e6/3ed1af4b-1054-434b-acf0-299a2c3e16b8/1678958564571sbv.mp4" type="video/mp4" />

              </video>
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL PENT</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51GLgvCMz1L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Stylish Men's Formal Slim Fit Trousers with Mid-Rise Design...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(67% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iRlRsIX8L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Slim Fit Lycra Trousers | Trendy Office Wear Pants...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>402</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71PsC9BiwnL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Casual Trousers for Men | Slim Fit Trousers for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹15,99</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/31z8I9U2EwL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Regular Casual Cotton Pants | Trousers | Stretchable...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>899</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,899</span></div>
                </div>
                <div>(40% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71Kj9KLZZXL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men Formal Trouser Regular Fit Solid | Soft and Breathable Pa...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>999</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,199</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iRlRsIX8L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Slim Fit Lycra Blend Trousers | Stylish Office Pants...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>402</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71U-qvK133S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Formal Pants for Men | Men's Slim fit Formal Pant Combo...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>985</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,699</span></div>
                </div>
                <div>(64% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81x-J78vw6S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Formal Pants for Men - Dark Grey Combo</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>999</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,699</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51GLgvCMz1L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Stylish Men's Formal Slim Fit Trousers with Mid-Rise Design...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(67% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iRlRsIX8L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Slim Fit Lycra Trousers | Trendy Office Wear Pants...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>402</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71PsC9BiwnL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Casual Trousers for Men | Slim Fit Trousers for Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹15,99</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/31z8I9U2EwL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Regular Casual Cotton Pants | Trousers | Stretchable...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>899</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,899</span></div>
                </div>
                <div>(40% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71Kj9KLZZXL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men Formal Trouser Regular Fit Solid | Soft and Breathable Pa...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>999</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,199</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iRlRsIX8L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Slim Fit Lycra Blend Trousers | Stylish Office Pants...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>402</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71U-qvK133S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Formal Pants for Men | Men's Slim fit Formal Pant Combo...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>985</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,699</span></div>
                </div>
                <div>(64% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81x-J78vw6S._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-yellow-900 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Formal Pants for Men - Dark Grey Combo</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>999</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,699</span></div>
                </div>
                <div>(63% OFF)</div>
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