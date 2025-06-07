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

export default function Jeans() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL JEANS</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/df8ddae1-8c4c-425d-9bfe-25c3056720d5.mp4/productVideoOptimized.mp4" type="video/mp4" />

              </video>
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e6376172-16f5-4143-85e4-f918bac22cb7._CR70,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL JEANS</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61nAduu6lGL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                {/* </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Knitted Carbon Black Mens Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,199</span></div>
                </div>
                <div>(36% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/719iGsQhgCL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Classic Straight-Fit Black Denim Jeans, Casual Fit...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,249</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61dLAhSsTZL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Knitted Light Blue Mens Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,299</span></div>
                </div>
                <div>(39% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61fy3RFVytL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Stretchable Straight Fit Mid Rise Jeans for Men</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,897</span></div>
                </div>
                <div>(68% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Relaxed Fit Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>648</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,499</span></div>
                </div>
                <div>(74% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/513pjnGdK6L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Jeans for Men || Men Jeans || Reguler Fit DenimJeans (NJJ...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>599</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,299</span></div>
                </div>
                <div>(85% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81YRMdCJY4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Tapered Fit Mid Rise Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>461</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,099</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/5145w+2kDjL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Jeans for Men |Reguler Fit DenimJeans | Mens Jeans Pant</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>749</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61nAduu6lGL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                {/* </span> */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Knitted Carbon Black Mens Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,199</span></div>
                </div>
                <div>(36% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/719iGsQhgCL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Classic Straight-Fit Black Denim Jeans, Casual Fit...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,249</span></div>
                </div>
                <div>(63% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61dLAhSsTZL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Knitted Light Blue Mens Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,299</span></div>
                </div>
                <div>(39% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61fy3RFVytL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                {/* <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>  */}
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Stretchable Straight Fit Mid Rise Jeans for Men</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>1,249</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,897</span></div>
                </div>
                <div>(68% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Relaxed Fit Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>648</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,499</span></div>
                </div>
                <div>(74% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/513pjnGdK6L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Jeans for Men || Men Jeans || Reguler Fit DenimJeans (NJJ...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>599</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹3,299</span></div>
                </div>
                <div>(85% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81YRMdCJY4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span> */}
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Tapered Fit Mid Rise Jeans</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>461</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,099</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/5145w+2kDjL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-green-900 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span> */}
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Jeans for Men |Reguler Fit DenimJeans | Mens Jeans Pant</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>749</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(50% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
            </div>
            <div className="w-full"><img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e6376172-16f5-4143-85e4-f918bac22cb7._CR70,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /></div>
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