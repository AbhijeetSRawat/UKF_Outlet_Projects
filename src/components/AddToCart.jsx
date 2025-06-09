import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export default function AddToCart({ setOpen3 }) {
    const [open, setOpen] = useState(1);
    const [open1, setOpen1] = useState(1);
    const [open2, setOpen2] = useState(1);
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const navigate = useNavigate();
    const desc = () => {
        if (open > 1) {
            setOpen(open - 1)
        }
    }
    const desc1 = () => {
        if (open1 > 1) {
            setOpen1(open1 - 1)
        }
    }
    const desc2 = () => {
        if (open2 > 1) {
            setOpen2(open2 - 1)
        }
    }
    return (
        <div className="min-h-screen bg-black z-40 p-8 text-[#ecba49] font-sans">
            <h1 className="text-3xl flex items-center justify-between mb-8">Your Cart <TiDeleteOutline onClick={() => setOpen3(false)} className='cursor-pointer animate-bounce' /></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform ${active == true ? "hidden" : "block"}`}>
                    <img src="https://m.media-amazon.com/images/I/71LnycrT7qL._AC_UL480_FMwebp_QL65_.jpg" alt="Shirt" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#ecba49]" />
                    <h2 className="text-2xl font-semibold mb-1">Shirt</h2>
                    <p className="text-lg font-medium mb-4">₹{open * 389}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button onClick={desc} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">-</button>
                            <span className="text-sm">{open}</span>
                            <button onClick={() => setOpen(open + 1)} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">+</button>
                        </div>
                        <button onClick={() => setActive(true)} className="px-4 py-2 cursor-pointer bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                            Remove
                        </button>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform ${active1 == true ? "hidden" : "block"}`}>
                    <img src="https://m.media-amazon.com/images/I/6159kYfD0KL._AC_UL480_FMwebp_QL65_.jpg" alt="Perfume" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#ecba49]" />
                    <h2 className="text-2xl font-semibold mb-1">Perfume</h2>
                    <p className="text-lg font-medium mb-4">₹{open1 * 211}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button onClick={desc1} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">-</button>
                            <span className="text-sm">{open1}</span>
                            <button onClick={() => setOpen1(open1 + 1)} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">+</button>
                        </div>
                        <button onClick={() => setActive1(true)} className="px-4 cursor-pointer py-2 bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                            Remove
                        </button>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform ${active2 == true ? "hidden" : "block"}`}>
                    <img src="https://m.media-amazon.com/images/I/71aplh5AFZL._AC_UL480_FMwebp_QL65_.jpg" alt="Wallet" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#ecba49]" />
                    <h2 className="text-2xl font-semibold mb-1">Leather Wallet</h2>
                    <p className="text-lg font-medium mb-4">₹{open2 * 696}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button onClick={desc2} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">-</button>
                            <span className="text-sm">{open2}</span>
                            <button onClick={() => setOpen2(open2 + 1)} className="w-8 cursor-pointer h-8 bg-[#ecba49] text-black rounded-full font-bold hover:bg-yellow-400">+</button>
                        </div>
                        <button onClick={() => setActive2(true)} className="px-4 cursor-pointer py-2 bg-[#ecba49] text-black font-semibold rounded hover:bg-yellow-400 transition">
                            Remove
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-2">Total: ₹ {(open + open1 + open2)*1296}</h2>
                <button
                    className="px-8 py-3 bg-[#ecba49] text-black text-lg font-bold rounded hover:bg-yellow-400 transition-all"
                    onClick={() => navigate('/Checkoutpage')}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
