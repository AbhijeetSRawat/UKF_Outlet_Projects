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

export default function Belt() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL BELT</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9256527f-ea69-4e07-baf0-8cc091552f35.mp4/productVideoOptimized.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL BELT</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>

              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51TKF++4NNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Generic</strong></div>
                <div className='text-justify'>Formal/Casual Black Color Artificial Leather Belts For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>170</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹499</span></div>
                </div>
                <div>(66% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61WefssrG3L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zero</strong></div>
                <div className='text-justify'>Men's Vegan Leather Belt for Men,...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(87% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71LjwCvMAmL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Createure</strong></div>
                <div className='text-justify'>Pu-Leather Formal/Casual Reversible Belt For Men/Boys...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(82% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71f9x1YGVuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Createure</strong></div>
                <div className='text-justify'>Reversible Pu-Leather Formal Belt For Men(Color...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51+wzp5v+dL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Jet Stream</strong></div>
                <div className='text-justify'>Nylon Belt, nylon fabric belt, unisex nylon belt, Hole free...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> <br />
                {/* <div>⭐⭐⭐⭐⭐</div> */}
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(75% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81epVkxdHNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Contacts</strong></div>
                <div className='text-justify'>Genuine Leather Belt for Men with Easier Adjustable Autolo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>849</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,800</span></div>
                </div>
                <div>(53% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71J5JQXYSHL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Simple Living</strong></div>
                <div className='text-justify'>Canvas Elastic Braided Woven Stretch Fabric Casual Belt For...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(72% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61VuhFPJ+uL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Jettream</strong></div>
                <div className='text-justify'>Canvas Belt For Men, Braided Stretchable Belt For Men &...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(72% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61AKMkh74QL._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Club Spunky</strong></div>
                <div className='text-justify'>Reversible PU-Leather Formal Black/Brown Belt For Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div> */}
                {/* <div>(72% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71duBAVfKhL._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zachari</strong></div>
                <div className='text-justify'>Men's Faux Leather Pin Buckle Belt trg-01</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>246</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/614c85ud-ML._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zachari</strong></div>
                <div className='text-justify'>Men's Faux Leather Pin Buckle Belt trg-01</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>262</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(74% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iKzfwFX5L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Simple Living</strong></div>
                <div className='text-justify'>Nylon Fabric Belt for Men, Plastic Flap Buckle, No Hole...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(27% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51TKF++4NNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Generic</strong></div>
                <div className='text-justify'>Formal/Casual Black Color Artificial Leather Belts For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>170</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹499</span></div>
                </div>
                <div>(66% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61WefssrG3L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zero</strong></div>
                <div className='text-justify'>Men's Vegan Leather Belt for Men,...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(87% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71LjwCvMAmL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Createure</strong></div>
                <div className='text-justify'>Pu-Leather Formal/Casual Reversible Belt For Men/Boys...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(82% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71f9x1YGVuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Createure</strong></div>
                <div className='text-justify'>Reversible Pu-Leather Formal Belt For Men(Color...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51+wzp5v+dL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Jet Stream</strong></div>
                <div className='text-justify'>Nylon Belt, nylon fabric belt, unisex nylon belt, Hole free...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> <br />
                {/* <div>⭐⭐⭐⭐⭐</div> */}
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>369</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(75% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81epVkxdHNL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Contacts</strong></div>
                <div className='text-justify'>Genuine Leather Belt for Men with Easier Adjustable Autolo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>849</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,800</span></div>
                </div>
                <div>(53% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71J5JQXYSHL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Simple Living</strong></div>
                <div className='text-justify'>Canvas Elastic Braided Woven Stretch Fabric Casual Belt For...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(72% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61VuhFPJ+uL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Jettream</strong></div>
                <div className='text-justify'>Canvas Belt For Men, Braided Stretchable Belt For Men &...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(72% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61AKMkh74QL._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Club Spunky</strong></div>
                <div className='text-justify'>Reversible PU-Leather Formal Black/Brown Belt For Men...</div>
                {/* <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button> */}
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>289</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div> */}
                {/* <div>(72% OFF)</div> */}
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71duBAVfKhL._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zachari</strong></div>
                <div className='text-justify'>Men's Faux Leather Pin Buckle Belt trg-01</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>246</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(75% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/614c85ud-ML._AC_UL480_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Zachari</strong></div>
                <div className='text-justify'>Men's Faux Leather Pin Buckle Belt trg-01</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>262</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(74% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61iKzfwFX5L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Simple Living</strong></div>
                <div className='text-justify'>Nylon Fabric Belt for Men, Plastic Flap Buckle, No Hole...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                {/* <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(27% OFF)</div> */}
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
