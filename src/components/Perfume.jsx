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

export default function Perfume() {
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

            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL PERFUME</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
              >
                <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1bd136c4-3255-4f18-b8ea-51bbc63ac1c6.mp4/productVideoOptimized.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL PERFUME</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51HvJdb1TVL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Uppeel Cocoa Calm Eau De Parfum (50 ml) | Long-Lasting EDP Perfumes | Warm Vanilla...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>990</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,100</span></div>
                </div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61uYMyVmFnL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>EM5™ Viking Perfume for Men | Aromatic Citrus Woody Fragrance | All Day Wear ED...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Viking</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(37% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61bYZYvl+BL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bombay Shaving Company Perfume For Unisex| Tokyo Premium Fragrances For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>349</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹795</span></div>
                </div>
                <div>(56% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71Ddx+WE5EL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA Discovery | Long Lasting EDP 7x8ml Perfume Gift Set for Man | Woody, Ou...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(17% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/711eP6dPXeL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Park Avenue Voyage Signature Collection | Perfume for Men | Fresh Long-lasting Aro...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>181</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹349</span></div>
                </div>
                <div>(48% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500 ' src="https://m.media-amazon.com/images/I/61k5k0dTSuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bella Vita Luxury Long Lasting Unisex Perfume Gift Set | 4x20ml Perfume for Man &...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Aquatic</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>565</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹849</span></div>
                </div>
                <div>(33% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover duration-500 ' src="https://m.media-amazon.com/images/I/519mdAYKTQL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA CEO Man & White Oud Unisex | Long Lasting Perfume for Man and Wo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Citrus, Spicy, Wood</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>255</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹748</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover duration-500 ' src="https://m.media-amazon.com/images/I/51M73SOIdhL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Wild Stone Ultra Sensual Long Lasting Perfume for...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Ultra Sensual</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>305</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹649</span></div>
                </div>
                <div>(53% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51+mNjNV7JL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Uppeel Cocoa Calm Eau De Parfum (50 ml) | Long-Lasting EDP Perfumes | Warm Vanilla...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>990</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,100</span></div>
                </div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71FYgvmvNAL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>EM5™ Viking Perfume for Men | Aromatic Citrus Woody Fragrance | All Day Wear ED...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Viking</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(37% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/511CYaqTA4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bombay Shaving Company Perfume For Unisex| Tokyo Premium Fragrances For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>349</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹795</span></div>
                </div>
                <div>(56% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61A+4Ai5TCL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA Discovery | Long Lasting EDP 7x8ml Perfume Gift Set for Man | Woody, Ou...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(17% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71jMXBI46hL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Park Avenue Voyage Signature Collection | Perfume for Men | Fresh Long-lasting Aro...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>181</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹349</span></div>
                </div>
                <div>(48% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500 ' src="https://m.media-amazon.com/images/I/51ZFK0eCagL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bella Vita Luxury Long Lasting Unisex Perfume Gift Set | 4x20ml Perfume for Man &...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Aquatic</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>565</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹849</span></div>
                </div>
                <div>(33% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden  flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover duration-500 ' src="https://m.media-amazon.com/images/I/61NQfNffquL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA CEO Man & White Oud Unisex | Long Lasting Perfume for Man and Wo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Citrus, Spicy, Wood</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>255</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹748</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover w-full h-full duration-500 ' src="https://m.media-amazon.com/images/I/41n0ALyjZYL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Wild Stone Ultra Sensual Long Lasting Perfume for...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Ultra Sensual</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>305</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹649</span></div>
                </div>
                <div>(53% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
            </div>
            <h1 className='my-5 font-semibold lg:text-4xl text-2xl'>Trending Now</h1>
            <div className={` grid mt-5  ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>
              <div className='p-2  overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51HvJdb1TVL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Uppeel Cocoa Calm Eau De Parfum (50 ml) | Long-Lasting EDP Perfumes | Warm Vanilla...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>990</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,100</span></div>
                </div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2  overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61uYMyVmFnL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>EM5™ Viking Perfume for Men | Aromatic Citrus Woody Fragrance | All Day Wear ED...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Viking</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(37% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61bYZYvl+BL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bombay Shaving Company Perfume For Unisex| Tokyo Premium Fragrances For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>349</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹795</span></div>
                </div>
                <div>(56% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71Ddx+WE5EL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA Discovery | Long Lasting EDP 7x8ml Perfume Gift Set for Man | Woody, Ou...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(17% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/711eP6dPXeL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Park Avenue Voyage Signature Collection | Perfume for Men | Fresh Long-lasting Aro...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>181</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹349</span></div>
                </div>
                <div>(48% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500 ' src="https://m.media-amazon.com/images/I/61k5k0dTSuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bella Vita Luxury Long Lasting Unisex Perfume Gift Set | 4x20ml Perfume for Man &...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Aquatic</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>565</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹849</span></div>
                </div>
                <div>(33% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover duration-500 ' src="https://m.media-amazon.com/images/I/519mdAYKTQL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA CEO Man & White Oud Unisex | Long Lasting Perfume for Man and Wo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Citrus, Spicy, Wood</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>255</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹748</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 object-cover duration-500 ' src="https://m.media-amazon.com/images/I/51M73SOIdhL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Wild Stone Ultra Sensual Long Lasting Perfume for...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Ultra Sensual</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>305</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹649</span></div>
                </div>
                <div>(53% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51+mNjNV7JL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Uppeel Cocoa Calm Eau De Parfum (50 ml) | Long-Lasting EDP Perfumes | Warm Vanilla...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>990</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,100</span></div>
                </div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71FYgvmvNAL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>EM5™ Viking Perfume for Men | Aromatic Citrus Woody Fragrance | All Day Wear ED...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Viking</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(37% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/511CYaqTA4L._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bombay Shaving Company Perfume For Unisex| Tokyo Premium Fragrances For Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>349</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹795</span></div>
                </div>
                <div>(56% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61A+4Ai5TCL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>BELLAVITA Discovery | Long Lasting EDP 7x8ml Perfume Gift Set for Man | Woody, Ou...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹599</span></div>
                </div>
                <div>(17% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71jMXBI46hL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Park Avenue Voyage Signature Collection | Perfume for Men | Fresh Long-lasting Aro...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Fresh</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>181</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹349</span></div>
                </div>
                <div>(48% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='h-[50%] overflow-hidden'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500 ' src="https://m.media-amazon.com/images/I/51ZFK0eCagL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Bella Vita Luxury Long Lasting Unisex Perfume Gift Set | 4x20ml Perfume for Man &...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Aquatic</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>565</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹849</span></div>
                </div>
                <div>(33% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
               <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51+mNjNV7JL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>Uppeel Cocoa Calm Eau De Parfum (50 ml) | Long-Lasting EDP Perfumes | Warm Vanilla...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>990</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,100</span></div>
                </div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71FYgvmvNAL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div className='text-justify'>EM5™ Viking Perfume for Men | Aromatic Citrus Woody Fragrance | All Day Wear ED...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Viking</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>949</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,499</span></div>
                </div>
                <div>(37% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
