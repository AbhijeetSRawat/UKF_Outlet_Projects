import React from 'react';
import { Link } from 'react-router';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-900">
                <h2 className="text-3xl font-bold mb-6 text-[#ecba49] text-center">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-[#ecba49]">Name</label>
                        <input type="text" placeholder="Enter your name" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-[#ecba49]">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
                    </div>

                    <div>
                        <label className="block mb-1 text-[#ecba49]">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
                    </div>

                    <div>
                        <label className="block mb-1 text-[#ecba49]">Mobile Number</label>
                        <input type="tel" placeholder="Enter your mobile number" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
                    </div>

                    <button type="submit" className="w-full mt-4 cursor-pointer bg-[#ecba49] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"  >
                        <Link to={'/loginsuccessfully'}>Submit</Link>
                    </button>
                </form>
            </div>
        </div>
    );
}
