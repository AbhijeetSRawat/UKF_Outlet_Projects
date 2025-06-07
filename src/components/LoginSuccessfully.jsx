import React from 'react';
import { Link } from 'react-router';

export default function LoginSuccessfully() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center p-8 rounded-lg shadow-lg bg-gray-900">
                <h1 className="text-4xl font-bold text-[#ecba49] mb-4">Login Successfully</h1>
                <p className="text-[#ecba49] text-lg">Welcome back. You have logged in successfully.</p>
                <button className='bg-[#ecba49] text-white my-3 p-1 rounded cursor-pointer'><Link to={'/'}>Dashboard</Link></button>
            </div>
        </div>
    );
}
