import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Wishlist({ setOpen4 }) {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    return (
        <div className="h-full overflow-y-auto bg-black p-6 text-[#ecba49]">
            <h1 className="text-3xl flex items-center justify-between mb-8">Your Wishlist <TiDeleteOutline onClick={() => setOpen4(false)} className='cursor-pointer' /></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                <div className={`bg-gray-900 p-4 rounded-lg shadow-lg ${open == true ? "hidden" : 'block'}`}>
                    <img src="https://m.media-amazon.com/images/I/6159kYfD0KL._AC_UL480_FMwebp_QL65_.jpg" alt="Product" className="w-full h-40 object-top rounded mb-4" />
                    <h2 className="text-xl font-semibold">Perfume</h2>
                    <p className="text-[#ecba49]">₹211</p>
                    <button onClick={() => setOpen(true)} className="mt-3 cursor-pointer px-4 py-2 bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                        Remove
                    </button>
                </div>


                <div className={`bg-gray-900 p-4 rounded-lg shadow-lg ${open2 == true ? "hidden" : 'block'}`}>
                    <img src="https://m.media-amazon.com/images/I/71aplh5AFZL._AC_UL480_FMwebp_QL65_.jpg" alt="Product" className="w-full h-40 object-top rounded mb-4" />
                    <h2 className="text-xl font-semibold">Leather Wallet</h2>
                    <p className="text-[#ecba49]">₹696</p>
                    <button onClick={() => setOpen2(true)} className="mt-3 cursor-pointer px-4 py-2 bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                        Remove
                    </button>
                </div>

                <div className={`bg-gray-900 p-4 rounded-lg shadow-lg ${open3 == true ? "hidden" : 'block'}`}>
                    <img src="https://m.media-amazon.com/images/I/71LnycrT7qL._AC_UL480_FMwebp_QL65_.jpg" alt="Product" className="w-full h-40 object-top rounded mb-4" />
                    <h2 className="text-xl font-semibold">Shirts</h2>
                    <p className="text-[#ecba49]">₹389</p>
                    <button onClick={() => setOpen3(true)} className="mt-3 cursor-pointer px-4 py-2 bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
