import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa';

export default function Sidebar() {
  const [open, setOpen] = useState(null);
  const [open1, setOpen1] = useState('');
  const [open2, setOpen2] = useState('');
  const [open3, setOpen3] = useState('');
  const [open4, setOpen4] = useState('');
  const [open5, setOpen5] = useState('');
  const [open6, setOpen6] = useState('');
  const [open7, setOpen7] = useState('');
  const [open8, setOpen8] = useState('');
  const [open9, setOpen9] = useState('');
  const toggles = (val) => {
    setOpen(open == val ? null : val)
  }
  const names = [
    { name: "UKF Outlet" },
    { name: "TechBro24" },
  ];
  const names1 = [
    { name: "Perfume" },
    { name: "Wallet" },
    { name: "Belt" },
    { name: "Shoes" },
    { name: "Winter Wear" },
    { name: "Summer Wear" },
    { name: "Men's" },
    { name: "Ethnic Wear" },
    { name: "Party Wear" },
  ];
  const names2 = [
    { name: "₹ 0-500" },
    { name: "₹ 500-1000" },
    { name: "₹ 1000-1500" },
    { name: "₹ 1500-2000" },
    { name: "₹ 2000-2500" },
    { name: "₹ 2500-3000" },
    { name: "₹ 3000-3500" },
    { name: "₹ 3500-4000" },
  ];
  const names3 = [
    { name: "10% and above" },
    { name: "20% and above" },
    { name: "30% and above" },
    { name: "40% and above" },
    { name: "50% and above" },
  ];
  const names4 = [
    { name: "Red", color: 'bg-red-500' },
    { name: "Green", color: 'bg-green-500' },
    { name: "Blue", color: 'bg-blue-500' },
    { name: "Gray", color: 'bg-gray-500' },
    { name: "Yellow", color: 'bg-yellow-500' },
    { name: "White", color: 'bg-white' },
    { name: "Purple", color: 'bg-purple-500' },
  ];
  const names5 = [
    { name: "Men" },
    { name: "Women" },
  ];
  const names6 = [
    { name: "Perfume" },
    { name: "Wallet" },
    { name: "Belt" },
    { name: "Shoes" },
    { name: "Winter Wear" },
    { name: "Summer Wear" },
    { name: "Men's" },
    { name: "Ethnic Wear" },
    { name: "Party Wear" },
  ];
  const names7 = [
    { name: "Cotton (सूती)" },
    { name: "Wool (ऊन)" },
    { name: "Silk (रेशम)" },
    { name: "Linen (फ्लैक्स का बना)" },
  ];
  const names8 = [
    { name: "Polyester" },
    { name: "Nylon" },
    { name: "Rayon" },
    { name: "Acrylic" },
  ];
  const filtername = names.filter((anuj) => anuj.name.toLowerCase().includes(open1.toLowerCase()))
  const filtername1 = names1.filter((anuj) => anuj.name.toLowerCase().includes(open2.toLowerCase()))
  const filtername2 = names2.filter((anuj) => anuj.name.toLowerCase().includes(open3.toLowerCase()))
  const filtername3 = names3.filter((anuj) => anuj.name.toLowerCase().includes(open4.toLowerCase()))
  const filtername4 = names4.filter((anuj) => anuj.name.toLowerCase().includes(open5.toLowerCase()))
  const filtername5 = names5.filter((anuj) => anuj.name.toLowerCase().includes(open6.toLowerCase()))
  const filtername6 = names6.filter((anuj) => anuj.name.toLowerCase().includes(open7.toLowerCase()))
  const filtername7 = names7.filter((anuj) => anuj.name.toLowerCase().includes(open8.toLowerCase()))
  const filtername8 = names8.filter((anuj) => anuj.name.toLowerCase().includes(open9.toLowerCase()))
  return (
    <div className='sticky bg-black top-0   text-[#ecba49] left-0' >
      <div className="overflow-y-auto">
        <div className="w-full flex justify-between p-2 items-center">
          <h1 className='font-semibold lg:text-3xl' style={{ fontFamily: "times new roman" }}> FILTER</h1>
          <span><a href="">CLEAR ALL</a></span>
        </div>
        <div className="my-5">
          <div className="space-y-2">
            <div className={`p-2 ${open == 'one' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('one')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>BRAND</button><FaAngleUp className={`${open == 'one' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'one' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open1} onChange={(e) => setOpen1(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Brand' />
                  {
                    filtername.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'two' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('two')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>CATEGORY</button><FaAngleUp className={`${open == 'two' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'two' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open2} onChange={(e) => setOpen2(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Category' />
                  {
                    filtername1.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'three' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('three')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>PRICE</button><FaAngleUp className={`${open == 'three' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'three' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open3} onChange={(e) => setOpen3(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Price' />
                  {
                    filtername2.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'four' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('four')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>DISCOUNT</button><FaAngleUp className={`${open == 'four' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'four' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open4} onChange={(e) => setOpen4(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Discount' />
                  {
                    filtername3.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'five' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('five')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>COLOR</button><FaAngleUp className={`${open == 'five' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'five' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open5} onChange={(e) => setOpen5(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Color' />
                  {
                    filtername4.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div className="flex justify-between items-center w-full">
                          <div>{nam.name}</div>
                          <div className={`p-2 rounded-full outline-2 outline-white me-2 ${nam.color}`}></div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'six' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('six')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>GENDER</button><FaAngleUp className={`${open == 'six' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'six' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open6} onChange={(e) => setOpen6(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Gender' />
                  {
                    filtername5.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'seven' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('seven')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer'>PRODUCT TYPE</button><FaAngleUp className={`${open == 'seven' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'seven' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open7} onChange={(e) => setOpen7(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Product type' />
                  {
                    filtername6.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'eight' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('eight')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer uppercase'>Natural Fabrics</button><FaAngleUp className={`${open == 'eight' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'eight' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open8} onChange={(e) => setOpen8(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Natural Fabrics' />
                  {
                    filtername7.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={`p-2 ${open == 'nine' ? 'border' : 'border-none'}`}>
              <div onClick={() => toggles('nine')} className="flex cursor-pointer items-center justify-between"><button className='cursor-pointer uppercase'>Synthetic Fabrics</button><FaAngleUp className={`${open == 'nine' ? '' : 'rotate-180'}`} /></div>
              <div className={`transition-all duration-500 overflow-hidden ${open == 'nine' ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                <div className="space-y-1">
                  <input type="text" value={open9} onChange={(e) => setOpen9(e.target.value)} className='w-full my-2 p-1 border-b border-white outline-none' placeholder='Search Synthetic Fabrics' />
                  {
                    filtername8.map((nam) => (
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" className='bg-white  cursor-pointer' />
                        <div>{nam.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
