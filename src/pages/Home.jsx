import React from 'react'
import Container from './Container'
import Slider from './Slider'
import { Link } from 'lucide-react'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <div>
        <Slider />
      </div>
      <Container>
        <h1 className='text-3xl uppercase text-center my-5' style={{ fontFamily: "times new roman" }}>ALL SHIRTS</h1>
        <div className="flex items-center gap-2 w-full overflow-y-auto my-5 hide-scrollbar">
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/71NCBXev2YL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Stylish Solid All Day Fresh Buttondown Casual Shirt...</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,749</p>M.R.P<p className='line-through'>₹2,399</p></div>
              <div className='text-[#ecba49] font-semibold'>(27%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61ScmnU7GML._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Cotton Full Sleeve Regular Fit Textured Shirt wi..</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,039</p>M.R.P<p className='line-through'>₹2,599</p></div>
              <div className='text-[#ecba49] font-semibold'>(60%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61vfyAm6FIL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Green Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61VJhR7ckjL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Checkered Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/718jAM0zJiL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Solid Regular Fit Shirt</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹809</p>M.R.P<p className='line-through'>₹2,699</p></div>
              <div className='text-[#ecba49] font-semibold'>(70%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/71NCBXev2YL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Stylish Solid All Day Fresh Buttondown Casual Shirt...</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,749</p>M.R.P<p className='line-through'>₹2,399</p></div>
              <div className='text-[#ecba49] font-semibold'>(27%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61ScmnU7GML._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Cotton Full Sleeve Regular Fit Textured Shirt wi..</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,039</p>M.R.P<p className='line-through'>₹2,599</p></div>
              <div className='text-[#ecba49] font-semibold'>(60%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61vfyAm6FIL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Green Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61VJhR7ckjL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Checkered Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/718jAM0zJiL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Solid Regular Fit Shirt</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹809</p>M.R.P<p className='line-through'>₹2,699</p></div>
              <div className='text-[#ecba49] font-semibold'>(70%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h1 className='text-3xl uppercase text-center my-5' style={{ fontFamily: "times new roman" }}>Fragrant Favourites</h1>
        <div className="flex items-center gap-2 w-full overflow-y-auto my-5 hide-scrollbar">
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0JZ01_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0JZ01_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div>Beach Blossom Cologne</div>
              <div className='flex items-center gap-2'> <p>$118.00</p><p>50ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L26L01_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L26L01_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>BESTSELLER</div>
              <div>English Pear & Freesia Cologne</div>
              <div className='flex items-center gap-2'> <p>$168.00</p><p>100ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2XZ01_670x670_0.png" alt="" />
                {/* <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L26L01_670x670_1.png" alt="" /> */}
              </a>
              <div className='text-[12px]'>BESTSELLER</div>
              <div>English Pear & Freesia Hand Cream Duo</div>
              <div className='flex items-center gap-2'> <p>$60.00</p><p>30ml,30ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0LQ01_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0LQ01_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div>Frangipani Flower Cologne</div>
              <div className='flex items-center gap-2'> <p>$88.00</p><p>30ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L41501_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L41501_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>BESTSELLER</div>
              <div>Wood Sage & Sea Salt Cologne</div>
              <div className='flex items-center gap-2'> <p>$168.00</p><p>100ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_LJT101_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_LJT101_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div>Wood Sage & Sea Salt Cologne</div>
              <div className='flex items-center gap-2'> <p>$168.00</p><p>100ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L4Z501_670x670_0.png" alt="" />
                {/* <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_LJT101_670x670_1.png" alt="" /> */}
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div>Most Loved Cologne Travel Spray 3-Piece Gift Set</div>
              <div className='flex items-center gap-2'><p>$80.00 3X</p><p>100ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="shrink-0 w-[45%] md:w-[25%] lg:w-[w-20%] group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img className='group-hover:hidden flex' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L6YN01_670x670_0.png" alt="" />
                <img className='group-hover:flex hidden' src="https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L6YN01_670x670_1.png" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div>Lime Basil & Mandarin Body & Hand Wash</div>
              <div className='flex items-center gap-2'><p>$32.00</p><p>100ml</p></div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
        </div>
      </Container>
      <h1 className='font-semibold text-3xl text-center my-5' style={{ fontFamily: "times new roman" }}>JEANS</h1>
      <video
        autoPlay
        muted
        playsInline
        loop 
        className="w-full"
      >
        <source src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/df8ddae1-8c4c-425d-9bfe-25c3056720d5.mp4/productVideoOptimized.mp4" type="video/mp4" />

      </video>
      <Container>
        <div className="my-5 grid lg:grid-cols-4 md:grid-cols-3 p-2 grid-cols-2 gap-3">
          <div className='overflow-hidden'>
            <a href="/pent">
              <div className='flex flex-col gap-4 items-center'>
                <div className="md:h-64 md:w-64 w-30 h-30  overflow-hidden"><img className='rounded-full' src="https://m.media-amazon.com/images/I/513uQw2P8wL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold'>PENT</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/shirt">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/71LnycrT7qL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>Shirt</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/tshirt">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/6129WlSedEL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>Tshirt</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/jeans">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/61dFcpPdJkL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>jeans</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/shoes">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/71YG7EClYfL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>shoes</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/winterwear">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/61KreB4x-SL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>winter wear</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/summerwear">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/71Bvq7V0CjL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>Summer wear</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/ethnicwear">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/618SEByEBTL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>ethnic wear</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/partywear">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/51Q6gdK8LuL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>party wear</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/perfume">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/71x-u8KqwRL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>perfume</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/wallet">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/81YoqlFrarL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>wallet</h1>
              </div>
            </a>
          </div>
          <div className='overflow-hidden'>
            <a href="/belt">
              <div className='flex flex-col gap-4 items-center'>
                <div className='md:h-64 md:w-64 w-30 h-30  overflow-hidden'><img className='rounded-full' src="https://m.media-amazon.com/images/I/71aplh5AFZL._AC_UL480_FMwebp_QL65_.jpg" alt="" /></div>
                <h1 className='font-semibold uppercase'>belt</h1>
              </div>
            </a>
          </div>
        </div>
      </Container>
      <div className="w-full">
        <video
          autoPlay
          muted
          playsInline
          loop 
          className="w-full"
        >
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8ef4ff1e-8a46-4cd0-b607-b7d47251c054.mp4/productVideoOptimized.mp4' />
        </video>
      </div>
      <Container>
        <h1 className='text-3xl uppercase text-center mt-5' style={{ fontFamily: "times new roman" }}> All Item</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 w-full overflow-y-auto mt-5 hide-scrollbar">
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/51R5rsAm7WL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Stylish Solid All Day Fresh Buttondown Casual Shirt...</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,749</p>M.R.P<p className='line-through'>₹2,399</p></div>
              <div className='text-[#ecba49] font-semibold'>(27%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop 
                  className="w-full"
                >
                  <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2c449d63-7f73-4dff-850e-f330bd7bb751.mp4/productVideoOptimized.mp4' />
                </video>
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Cotton Full Sleeve Regular Fit Textured Shirt wi..</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,039</p>M.R.P<p className='line-through'>₹2,599</p></div>
              <div className='text-[#ecba49] font-semibold'>(60%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61XdYS1sqyL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Green Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/71hEGHI6AnL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Checkered Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls
                  className="w-full"
                >
                  <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9e4a7fde-cc6c-4a44-9f5a-706071a79da8.mp4/productVideoOptimized.mp4' />
                </video>
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Solid Regular Fit Shirt</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹809</p>M.R.P<p className='line-through'>₹2,699</p></div>
              <div className='text-[#ecba49] font-semibold'>(70%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61+u7BBiaxL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Stylish Solid All Day Fresh Buttondown Casual Shirt...</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,749</p>M.R.P<p className='line-through'>₹2,399</p></div>
              <div className='text-[#ecba49] font-semibold'>(27%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/61BYQOF1nOL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Cotton Full Sleeve Regular Fit Textured Shirt wi..</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,039</p>M.R.P<p className='line-through'>₹2,599</p></div>
              <div className='text-[#ecba49] font-semibold'>(60%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/71s4yJYxVjL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Green Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop 
                  className="w-full"
                >
                  <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/926a71e1-5f93-44cf-b460-2fab60ccc85b.mp4/productVideoOptimized.mp4' />
                </video>
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Plus Men's Olive Checkered Colourblock Collared Button</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹1,109</p>M.R.P<p className='line-through'>₹2,199</p></div>
              <div className='text-[#ecba49] font-semibold'>(50%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
          <div className="w-full group shadow p-2">
            <div className='flex flex-col items-center gap-5 duration-500'>
              <a href="/detailspage">
                <img width={100} src="https://m.media-amazon.com/images/I/71uWensTfOL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              </a>
              <div className='text-[12px]'>LIMITED EDITION</div>
              <div className='text-center'>Men's Solid Regular Fit Shirt</div>
              <div className='flex items-center gap-2  text-gray-400'> <p className='text-black'>₹809</p>M.R.P<p className='line-through'>₹2,699</p></div>
              <div className='text-[#ecba49] font-semibold'>(70%OFF)</div>
              <a href="/addtocart"><button className='p-2 border border-gray-400'>Add To Bag</button></a>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full">
        <a href="tshirt/"><img className='w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5e8f5623-daaa-440b-a2bb-6b2c519260fb._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt="" /></a>
      </div>
      <div className="w-full grid lg:grid-cols-6 grid-cols-3 mb-5">
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8ef4ff1e-8a46-4cd0-b607-b7d47251c054.mp4/productVideoOptimized.mp4' />
        </video>
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/479677514190/123f059f-6de6-454c-931f-72222c3993e6/3ed1af4b-1054-434b-acf0-299a2c3e16b8/1678958564571sbv.mp4' />
        </video>
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8efe297b-b78d-4a43-954a-8b8fbc2ab804.mp4/productVideoOptimized.mp4' />
        </video>
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/df8ddae1-8c4c-425d-9bfe-25c3056720d5.mp4/productVideoOptimized.mp4' />
        </video>
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9256527f-ea69-4e07-baf0-8cc091552f35.mp4/productVideoOptimized.mp4' />
        </video>
        <video autoPlay muted playsInline loop  className="w-full">
          <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1bd136c4-3255-4f18-b8ea-51bbc63ac1c6.mp4/productVideoOptimized.mp4' />
        </video>

      </div>
    </div>
  )
}
