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

export default function Shirt() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL SHIRTs</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8efe297b-b78d-4a43-954a-8b8fbc2ab804.mp4/productVideoOptimized.mp4" type="video/mp4" />

              </video>
              {/* <img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2eebd55-8322-42eb-abcf-68a6a144e476._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /> */}
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL SHIRTs</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/41Cshl8a+PL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Cotton Blend Solid Slim Fit Casual Shirt, Full Sleeve...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(60% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71mUrqm5SfL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Comfort Slim Fit Pure Cotton Checked Casual Shirt</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>449</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71qo2Ev6L4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Slim Fit Cotton Casual Check Shirt for Men</div>
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
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51j2mBT8iiL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Regular Fit Solid Soft Touch Cotton Casual Shirt wi...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,849</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61ACM0YZDzL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Cotton Blend Shirt, Black with Red Trim, Long Slee...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71K2BvXJCRL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Poly Lycra Popcorn Abstract Half Sleeve Men Slim Fit Cas...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61qBHhdkyJL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Poly Lycra Popcorn Abstract Half Sleeve Men Slim Fit Cas...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>682</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,199</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51rLHfzXEtL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Solid Short Sleeve and Button Up Lapel Shirt with...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(80% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/41Cshl8a+PL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-600 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Cotton Blend Solid Slim Fit Casual Shirt, Full Sleeve...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(60% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71mUrqm5SfL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Comfort Slim Fit Pure Cotton Checked Casual Shirt</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>449</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71qo2Ev6L4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Slim Fit Cotton Casual Check Shirt for Men</div>
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
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51j2mBT8iiL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Regular Fit Solid Soft Touch Cotton Casual Shirt wi...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,849</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61ACM0YZDzL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Cotton Blend Shirt, Black with Red Trim, Long Slee...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71K2BvXJCRL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Poly Lycra Popcorn Abstract Half Sleeve Men Slim Fit Cas...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(73% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61qBHhdkyJL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Poly Lycra Popcorn Abstract Half Sleeve Men Slim Fit Cas...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>682</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,199</span></div>
                </div>
                <div>(69% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1  shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img width={100} className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51rLHfzXEtL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='flex items-center gap-2'>
                  <span className='p-2 h-5 w-5 rounded-full bg-gray-300 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-red-950 cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-blue-300 cursor-pointer'></span>
                  {/* <span className='p-2 h-5 w-5 rounded-full bg-green-600 cursor-pointer'></span> */}
                  <span className='p-2 h-5 w-5 rounded-full bg-black cursor-pointer'></span>
                  <span className='p-2 h-5 w-5 rounded-full bg-purple-600 cursor-pointer'></span>
                </span>
                {/* <span className='text-gray-400 text-[13px]'>Sponsored !</span> */}
                <div><strong>UKF Outlet</strong></div>
                <div className='text-justify'>Men's Solid Short Sleeve and Button Up Lapel Shirt with...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(80% OFF)</div>
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