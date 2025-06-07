import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Detailspage() {
  const images = [
    'https://m.media-amazon.com/images/I/619zX+IiuWL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71ZRpoHrIuL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71bopEZAkDL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/817Rq2TAOHL._SX679_.jpg'
  ]
  const [open, setOpen] = useState(images[0])
  return (
    <div className="bg-black text-[#ecba49] min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        <div className="flex flex-col gap-4">
          <img
            src={open}
            alt="Perfume Large"
            className="w-full max-w-md rounded-xl"
          />
          <div className="flex gap-2">
            {
              images.map((img) => (
                <img onClick={() => setOpen(img)} src={img} alt="" className="w-14 cursor-pointer h-14 rounded" />
              ))
            }

          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold leading-tight">
            BELLAVITA Gourmet Collection Vanilla | Long Lasting Perfume for Man and Woman | EDP 100ml | Musk, Fruity Premium Unisex Fragrance for Men and Women
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#ecba49] font-semibold">4.0 ★★★★★</span>
            <span className="text-gray-400">(126 ratings)</span>
            <span className="bg-yellow-600 text-black px-2 py-0.5 text-xs font-bold rounded">UKF's Choice</span>
          </div>

          <p className="text-sm text-gray-400">1K+ bought in past month</p>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold text-lg">-25%</span>
              <span className="text-2xl font-bold">₹599</span>
              <span className="text-sm text-gray-400">(₹5.99 / millilitre)</span>
            </div>
            <div className="text-sm text-gray-400 line-through">M.R.P.: ₹799</div>
            <div className="text-sm text-gray-400">Inclusive of all taxes</div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm">Apply 3% coupon</label>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg text-sm space-y-2">
            <div>🪙 Cashback: Upto ₹17.00 as Google Pay Balance</div>
            <div>🏦 Bank Offer: Upto ₹2,000.00 off on select Credit Cards</div>
            <div>🤝 Partner Offer: Bella Vita - Buy 2 Get 5% Off, Buy 3 Get 7% Off</div>
          </div>

          <div className="text-sm space-y-1">
            <div>
              <strong>FREE delivery</strong> Wednesday, <strong>28 May</strong>
            </div>
            <div>
              Or fastest delivery <strong>Tomorrow, 25 May</strong>. Order within <span className="text-green-400">3 hrs 32 mins</span>
            </div>
            <div> Delivering to Jaipur 302005</div>
          </div>

          <div className="text-green-500 font-semibold">In stock</div>
          <div className="text-sm text-gray-400">Ships from UKF</div>
          <div className="text-sm text-gray-400">Sold by RK World Infocom Pvt Ltd</div>
          <div className="text-sm text-gray-400">Payment: Secure transaction</div>

          <div className="flex gap-4 mt-4">
            <button className="bg-[#ecba49] text-black px-6 py-2 cursor-pointer rounded font-semibold hover:opacity-90">
              <Link to={'/addtocart'}>  Add to Cart</Link>
            </button>
            <button className="border border-[#ecba49] px-6 py-2 rounded duration-500 cursor-pointer font-semibold hover:bg-[#ecba49] hover:text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
