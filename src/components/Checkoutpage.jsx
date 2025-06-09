import React from 'react';

export default function Checkout() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };
    return (
        <div className="min-h-screen bg-gray-100 md:p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center text-[#ecba49] mb-8">Checkout</h2>

                <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                   
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Shipping Information</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="Address" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="City" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="State" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="Postal Code" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                            <input type="tel" placeholder="Phone Number" className="w-full  outline-none p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
 
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h3>
                        <div className="bg-gray-50 p-4 rounded border space-y-2">
                            <div className="flex justify-between">
                                <span>Product 1</span>
                                <span>₹999</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Product 2</span>
                                <span>₹499</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>₹1498</span>
                            </div>
                        </div>
 
                        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Payment Method</h3>
                        <div className="space-y-2">
                            <input type="text" placeholder="UPI ID or Card Number" className="w-full outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="Card Expiry (MM/YY)" className="w-full outline-none p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="CVV" className="w-full outline-none p-2 border border-gray-300 rounded" />
                        </div>
 
                        <button type="submit" className="w-full mt-6 cursor-pointer bg-[#ecba49] text-black font-semibold py-3 rounded hover:bg-yellow-400 transition">
                            Place Order
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}
