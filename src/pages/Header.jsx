import React, { useState } from 'react'
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa'
import { GiDiscGolfBag } from 'react-icons/gi'
import { IoMdMenu } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-router'
import AddToCart from '../components/AddToCart'
import Whishlist from '../components/Whishlist'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  return (
    <>
      {/* lg device k liya */}
      <div style={{fontFamily:"times new roman"}} className='bg-black font-semibold   sticky top-0 left-0 z-30 hidden lg:block px-6 py-3 text-[#ecba49]'>
        <div className="grid grid-cols-5">
          <div className='flex justify-center items-center'><Link to={'/'}><img width={100} src="/images/ukflogo.jpeg" alt="" /></Link></div>
          <div className='col-span-3 flex justify-between items-center uppercase text-[14px]'>
            <div className='relative'><div className='cursor-pointer' onClick={() => setOpen(!open)}>Men's</div>
              <div className={`absolute z-30 top-8 bg-white py-3 shadow space-y-2 ${open == true ? "block" : "hidden"}`}>
                <div onClick={() => setOpen(false)} className='px-6 hover:bg-black duration-300'><Link to={'/pent'}>Pent</Link></div>
                <div onClick={() => setOpen(false)} className='px-6 hover:bg-black duration-300'><Link to={'/shirt'}>Shirt</Link></div>
                <div onClick={() => setOpen(false)} className='px-6 hover:bg-black duration-300'><Link to={'/jeans'}>Jeans</Link></div>
                <div onClick={() => setOpen(false)} className='px-6 hover:bg-black duration-300'><Link to={'/tshirt'}>Tshirt</Link></div>
              </div>
            </div>
            <div><Link to={'/shoes'}>Shoes</Link></div>
            <div><Link to={'/winterwear'}>Winter wear</Link></div>
            <div><Link to={'/summerwear'}>Summer wear</Link></div>
            <div><Link to={'/ethnicwear'}>Ethnic wear</Link></div>
            <div><Link to={'/partywear'}>Party wear</Link></div>
            <div><Link to={'/perfume'}>Perfume</Link></div>
            <div><Link to={'/wallet'}>Wallet</Link></div>
            <div><Link to={'/belt'}>Belt</Link></div>
          </div>
          <div className='flex items-center gap-3 justify-center'>
            <IoSearchOutline className='cursor-pointer' onClick={() => setOpen2(true)} size={25} />
            <GiDiscGolfBag className='cursor-pointer' onClick={() => setOpen3(true)} size={25} />
            <FaRegHeart className='cursor-pointer' onClick={() => setOpen4(true)} size={25} />
            <Link to={'/login'}><FaRegUserCircle className='cursor-pointer' size={25} /></Link>
          </div>
        </div>
      </div>
      {/* mobil device k liya */}
      <div style={{fontFamily:"times new roman"}} className="w-full font-semibold  sticky top-0 left-0 z-30 lg:hidden block ">
        <div className="w-full flex justify-between items-center px-4 py-2 text-[#ecba49] bg-black">
          <IoMdMenu onClick={() => setOpen1(!open1)} size={25} />
          <div className='flex justify-center items-center'><Link to={'/'}><img width={100} src="/images/ukflogo.jpeg" alt="" /></Link></div>
          <div className="flex items-center gap-3">
            <IoSearchOutline onClick={() => setOpen2(true)} size={25} />
            <GiDiscGolfBag onClick={() => setOpen3(true)} size={25} />
          </div>
        </div>
        <div className="relative">
          <div className={`w-full h-screen absolute p-2 font-semibold top-0 duration-500 bg-white space-y-3 ${open1 == true ? "left-0" : "left-[-100%]"}`}>
            <div onClick={() => setOpen1(false)}  className='flex items-center justify-between'><Link to={'/pent'}>Pent</Link><TiDeleteOutline className='animate-spin' onClick={() => setOpen1(false)} size={25} /></div>
            <div onClick={() => setOpen1(false)}><Link to={'/shirt'}>Shirt</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/jeans'}>Jeans</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/tshirt'}>Tshirt</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/shoes'}>Shoes</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/winterwear'}>Winter wear</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/summerwear'}>Summer wear</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/ethnicwear'}>Ethnic wear</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/partywear'}>Party wear</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/perfume'}>Perfume</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/wallet'}>Wallet</Link></div>
            <div onClick={() => setOpen1(false)}><Link to={'/belt'}>Belt</Link></div>
            <div className="w-full grid grid-cols-2 gap-2">
              <button onClick={() => { setOpen1(false) }} className='bg-black text-[#ecba49] p-1'><Link to={'/login'}>LOGIN</Link></button>
              <button onClick={() => { setOpen1(false), setOpen4(true) }} className='text-black bg-[#ecba49] p-1'>WHISHLIST</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full z-40 h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] ${open2 == true ? "flex" : 'hidden'}`}>
        <div className="w-full bg-black text-[#ecba49] p-2">
          <div className='flex w-full items-center gap-2'>
            <input type="text" placeholder='Search Products' className='w-full text-black bg-gray-200 outline-none p-1 border border-gray-400' />
            <TiDeleteOutline size={25} onClick={() => setOpen2(false)} className='animate-spin cursor-pointer text-gray-200' />
          </div>
        </div>
      </div>
      <div className={`w-full z-40 h-screen fixed overflow-y-auto top-0  bg-[rgba(0,0,0,0.3)] duration-500 overflow-hidden ${open3 == true ? "left-0" : 'left-[100%]'}`}>
        <div className="md:w-[90%] w-full h-full bg-white p-2">
          <div>
            <AddToCart setOpen3={setOpen3} />
          </div>
        </div>
      </div>
      <div className={`w-full z-40 h-screen fixed overflow-y-auto top-0  bg-[rgba(0,0,0,0.3)] duration-500 overflow-hidden ${open4 == true ? "left-0" : 'left-[-100%]'}`}>
        <div className="md:w-[90%] w-full h-full bg-white p-2">
          <div>
            <Whishlist setOpen4={setOpen4} />
          </div>
        </div>
      </div>
    </>
  )
}
