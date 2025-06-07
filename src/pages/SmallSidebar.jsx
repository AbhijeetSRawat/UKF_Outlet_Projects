import React, { useState } from 'react'
import { MdFilterAltOff, MdSort } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'

export default function SmallSidebar() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState('one');
  const toggles = (val) => {
    setOpen1(open1 == val ? null : val)
  }
  return (
    <>
      <div className="grid z-30 grid-cols-2 w-full font-semibold fixed bottom-0 left-0">
        <div className='w-full bg-[#ecba49] flex items-center gap-1 p-2 justify-center'><button>Sort By</button><MdSort /></div>
        <div onClick={() => setOpen(true)} className='w-full flex items-center gap-1 bg-black text-[#ecba49] p-2 justify-center'><button>Filter</button><MdFilterAltOff /></div>
      </div>
      <div className={`w-full h-screen p-2 fixed top-0 bg-black text-[#ecba49] left-0 z-40 duration-500 ${open == true ? "scale-100" : ' scale-0'}`}>
        <div className="flex items-center justify-between "><h1 className='font-semibold text-3xl'><img width={100} src="/images/ukflogo.jpeg" alt="" /></h1> <TiDelete onClick={() => setOpen(false)} size={25} className='animate-bounce' /></div>
        <div className="mt-4">
          <div className="grid grid-cols-3 font-semibold" style={{ fontFamily: "times new roman" }}>
            <div className='p-2 space-y-2'>
              <div onClick={() => toggles('one')} className={`p-1 ${open1 == "one" ? 'bg-[#ecba49] text-black' : ""}`}>BRAND</div>
              <div onClick={() => toggles('two')} className={`p-1 ${open1 == "two" ? 'bg-[#ecba49] text-black' : ""}`}>CATEGORY</div>
              <div onClick={() => toggles('three')} className={`p-1 ${open1 == "three" ? 'bg-[#ecba49] text-black' : ""}`}>PRICE</div>
              <div onClick={() => toggles('four')} className={`p-1 ${open1 == "four" ? 'bg-[#ecba49] text-black' : ""}`}>DISCOUNT</div>
              <div onClick={() => toggles('five')} className={`p-1 ${open1 == "five" ? 'bg-[#ecba49] text-black' : ""}`}>COLOR</div>
              <div onClick={() => toggles('six')} className={`p-1 ${open1 == "six" ? 'bg-[#ecba49] text-black' : ""}`}>GENDER</div>
              <div onClick={() => toggles('seven')} className={`p-1 line-clamp-1 ${open1 == "seven" ? 'bg-[#ecba49] text-black' : ""}`}>PRODUCT type</div>
              <div onClick={() => toggles('eight')} className={`uppercase p-1 ${open1 == 'eight' ? "bg-[#ecba49] text-black" : ""}`}>Nat. Fabrics</div>
              <div onClick={() => toggles('nine')} className={`uppercase p-1 ${open1 == 'nine' ? "bg-[#ecba49] text-black" : ""}`}>Syn. Fabrics</div>
            </div>
            <div className='col-span-2 bg-white  h-screen text-black p-2'>
              <div className='space-y-3'>
                <div className={`space-y-2 ${open1 == 'one' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" />UKF Outlet</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />TechBro24</div>
                </div>
                <div className={`space-y-2 ${open1 == 'two' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Pent</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Shirts</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Tshirt</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Jeans</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Perfume</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Wallet</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Belt</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Shoes</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Winter Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Summer Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Ethnic Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Party Wear</div>
                </div>
                <div className={`space-y-2 ${open1 == 'three' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 0-500</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 500-1000</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 1000-1500</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 1500-2000</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 2000-2500</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 2500-3000</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 3000-3500</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> ₹ 3500-4000</div>
                </div>
                <div className={`space-y-2 ${open1 == 'four' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" /> 10% and above</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> 20% and above</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> 30% and above</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> 40% and above</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> 50% and above</div>
                </div>
                <div className={`space-y-2 ${open1 == 'five' ? "block" : 'hidden'}`}>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Red</div> <span className='p-2 border-2 border-white rounded-full bg-red-500'></span></div>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Green</div> <span className='p-2 border-2 border-white rounded-full bg-green-500'></span></div>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Gray</div> <span className='p-2 border-2 border-white rounded-full bg-gray-500'></span></div>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Blue</div> <span className='p-2 border-2 border-white rounded-full bg-blue-500'></span></div>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Purple</div> <span className='p-2 border-2 border-white rounded-full bg-purple-500'></span></div>
                  <div className='flex items-center justify-between gap-3'><div><input type="checkbox" /> Black</div> <span className='p-2 border-2 border-white rounded-full bg-black'></span></div>
                </div>
                <div className={`space-y-2 ${open1 == 'six' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Men's</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Women's</div>
                </div>
                <div className={`space-y-2 ${open1 == 'seven' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Pent</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Shirts</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Tshirt</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Jeans</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Perfume</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Wallet</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Belt</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Shoes</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Winter Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Summer Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" /> Ethnic Wear</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Party Wear</div>
                </div>
                <div className={`space-y-2 ${open1 == 'eight' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" />Cotton (सूती)</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Wool (ऊन)</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Silk (रेशम)</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Linen (फ्लैक्स का बना)</div>
                </div>
                <div className={`space-y-2 ${open1 == 'nine' ? "block" : 'hidden'}`}>
                  <div className='flex items-center gap-3'><input type="checkbox" />Polyester</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Nylon</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Rayon</div>
                  <div className='flex items-center gap-3'><input type="checkbox" />Acrylic</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full font-semibold fixed bottom-0 left-0">
            <div onClick={() => setOpen(false)} className='w-full bg-[#ecba49] flex items-center text-black gap-1 p-2 justify-center'><button>Close</button></div>
            <div className='w-full flex items-center gap-1 bg-black text-[#ecba49] p-2 justify-center'><button>Continue</button></div>
          </div>
        </div>
      </div>
    </>
  )
}
