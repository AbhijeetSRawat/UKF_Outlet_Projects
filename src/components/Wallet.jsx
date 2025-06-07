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

export default function Wallet() {
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
            <h1 className='p-2 font-semibold text-3xl lg:flex hidden' style={{ fontFamily: "times new roman" }}>ALL WALLET</h1>
            <div className="w-full">
              <video
                autoPlay
                muted
                playsInline
                loop
                controls
                className="w-full"
              >
                <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8ef4ff1e-8a46-4cd0-b607-b7d47251c054.mp4/productVideoOptimized.mp4' />
              </video>
            </div>
            <h1 className='p-2 font-semibold text-3xl lg:hidden flex' style={{ fontFamily: "times new roman" }}>ALL WALLET</h1>

            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51BzIpsMXxL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Bracevor</strong></div>
                <div className='text-justify'>Premium Popup Card Holder Trifold Leather Wallet for Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(27% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61pGOQFcyqL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Marbin</strong></div>
                <div className='text-justify'>Leather Wallet for Men – Multiple Slots (Black)...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(80% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81pNCj544nL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Amazon basics</strong></div>
                <div className='text-justify'>amazon basics Leather Wallet | Durable Leather Craftsmanshi...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>439</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,000</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81sMDHOBWdL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Ratwood</strong></div>
                <div className='text-justify'>Black Vegan Leather Compact Wallet for Men | 7 Credit Card...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>362</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹698</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81hwmX0eDqL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>PU Leather 9 Slot Vertical Credit Debit Card Holder Mon...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(85% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81YoqlFrarL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>PU Leather 9 Slot Vertical Credit Debit Card Holder Mo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71DhUj8qwxL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>Wallets for Men Leather Original Purses for Men RFID...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(83% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71SYvtX2YmL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Rigohill</strong></div>
                <div className='text-justify'>Doger Olive Green Leather Wallet For Men, 2 Card Slot...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,499</span></div>
                </div>
                <div>(80% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>

            </div>
            <h1 className='my-5 font-semibold lg:text-4xl text-2xl'>Trending Now</h1>
            <div className={` grid mt-5 ${open == 'one' ? "md:grid-cols-1 lg:grid-cols-2" : open == 'two' ? "md:grid-cols-2 lg:grid-cols-3" : open == "three" ? "md:grid-cols-3 lg:grid-cols-4" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"} gap-2`}>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81hwmX0eDqL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>PU Leather 9 Slot Vertical Credit Debit Card Holder Mon...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(85% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81YoqlFrarL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>PU Leather 9 Slot Vertical Credit Debit Card Holder Mo...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>299</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹999</span></div>
                </div>
                <div>(70% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71DhUj8qwxL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Storite</strong></div>
                <div className='text-justify'>Wallets for Men Leather Original Purses for Men RFID...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>499</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(83% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div className='flex justify-center items-center'><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/71SYvtX2YmL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Rigohill</strong></div>
                <div className='text-justify'>Doger Olive Green Leather Wallet For Men, 2 Card Slot...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>495</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,499</span></div>
                </div>
                <div>(80% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/51BzIpsMXxL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Bracevor</strong></div>
                <div className='text-justify'>Premium Popup Card Holder Trifold Leather Wallet for Me...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>2,199</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,999</span></div>
                </div>
                <div>(27% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/61pGOQFcyqL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Marbin</strong></div>
                <div className='text-justify'>Leather Wallet for Men – Multiple Slots (Black)...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>399</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹1,999</span></div>
                </div>
                <div>(80% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81pNCj544nL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Amazon basics</strong></div>
                <div className='text-justify'>amazon basics Leather Wallet | Durable Leather Craftsmanshi...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>439</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹2,000</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>
              <div className='p-2 overflow-hidden space-y-1 md:shadow-none shadow'>
                <div><Link to={'/detailspage'}><img className='hover:scale-105 duration-500' src="https://m.media-amazon.com/images/I/81sMDHOBWdL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></Link></div>
                <span className='text-gray-400 text-[13px]'>Sponsored !</span>
                <div><strong>Ratwood</strong></div>
                <div className='text-justify'>Black Vegan Leather Compact Wallet for Men | 7 Credit Card...</div>
                <button className='p-1 text-[13px] rounded bg-gray-100 font-semibold'>Cocoa Calm</button>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="flex items-center gap-1 justify-between">
                  <span>₹ <span className='font-semibold lg:text-[20px]'>362</span></span>
                  <div className='text-gray-400'>M.R.P: <span className='line-through'>₹698</span></div>
                </div>
                <div>(78% OFF)</div>
                <Link to={'/addtocart'}><button className='p-1 bg-[#ecba49] rounded'>Add To Cart</button></Link>
              </div>


            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
