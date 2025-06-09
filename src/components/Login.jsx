// import React from 'react';
// import { Link } from 'react-router';

// export default function Login() {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black">
//             <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-900">
//                 <h2 className="text-3xl font-bold mb-6 text-[#ecba49] text-center">Login</h2>

//                 <form className="space-y-4">
//                     <div>
//                         <label className="block mb-1 text-[#ecba49]">Name</label>
//                         <input type="text" placeholder="Enter your name" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-1 text-[#ecba49]">Email</label>
//                         <input type="email" placeholder="Enter your email" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
//                     </div>

//                     <div>
//                         <label className="block mb-1 text-[#ecba49]">Password</label>
//                         <input type="password" placeholder="Enter your password" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
//                     </div>

//                     <div>
//                         <label className="block mb-1 text-[#ecba49]">Mobile Number</label>
//                         <input type="tel" placeholder="Enter your mobile number" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" />
//                     </div>

//                     <button type="submit" className="w-full mt-4 cursor-pointer bg-[#ecba49] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"  >
//                         <Link to={'/loginsuccessfully'}>Submit</Link>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from 'react-router';



export default function Login() {
    const [showSignUp, setShowSignUp] = useState(true);
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '', mobileNo: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };



    // Dummy handlers for UI only
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(signupData)
        // setMessage('Signup feature is disabled.');
        // Swal.fire({
        //     icon: 'info',
        //     title: 'Signup Disabled',
        //     text: 'Backend integration has been removed.'
        // });

        try {
            const response = await axios.post("http://localhost:4000/api/v1/signup",signupData);

            Swal.fire({
             icon: 'success',
             title: 'Sign up Successfull',
             text: 'Now Login to UKF Outlets.'
             });

            navigate("/");
            console.log("Signup successful:", response.data);
        } catch (error) {

            Swal.fire({
             icon: 'error',
             title: 'Sign up Failed',
             text: 'Error while SignUp.'
             });

            console.error("Signup error:", error.response.data);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // setMessage('Login feature is disabled.');
        // Swal.fire({
        //     icon: 'info',
        //     title: 'Login Disabled',
        //     text: 'Backend integration has been removed.'
        // });

         try {
            const response = await axios.post("http://localhost:4000/api/v1/login",loginData);
            navigate("/");
            
            Swal.fire({
             icon: 'success',
             title: 'Login Successfull',
             text: 'Welcome to UKF Outlets.'
             });

            console.log("Login successful:", response.data);
        } catch (error) {

            Swal.fire({
             icon: 'error',
             title: 'Log In Failed',
             text: 'Error while LogIn.'
             });

            console.error("Login error:", error.response.data);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-900">
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-4 py-2 font-bold rounded-l ${showSignUp ? 'bg-[#ecba49] text-black' : 'bg-gray-800 text-[#ecba49]'}`}
                        onClick={() => setShowSignUp(true)}
                    >
                        Sign Up
                    </button>
                    <button
                        className={`px-4 py-2 font-bold rounded-r ${!showSignUp ? 'bg-[#ecba49] text-black' : 'bg-gray-800 text-[#ecba49]'}`}
                        onClick={() => setShowSignUp(false)}
                    >
                        Login
                    </button>
                </div>
                {message && <div className="mb-4 text-center text-[#ecba49]">{message}</div>}
                {showSignUp ? (
                    <>
                        <h2 className="text-3xl font-bold mb-6 text-[#ecba49] text-center">Sign Up</h2>
                        <form className="space-y-4" onSubmit={handleSignup}>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Name</label>
                                <input type="text" name="name" value={signupData.name} onChange={handleSignupChange} placeholder="Enter your name" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Email</label>
                                <input type="email" name="email" value={signupData.email} onChange={handleSignupChange} placeholder="Enter your email" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Password</label>
                                <input type="password" name="password" value={signupData.password} onChange={handleSignupChange} placeholder="Enter your password" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Mobile Number</label>
                                <input type="tel" name="mobileNo" value={signupData.mobileNo} onChange={handleSignupChange} placeholder="Enter your mobile number" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <button type="submit" className="w-full mt-4 cursor-pointer bg-[#ecba49] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition">
                                Sign Up
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold mb-6 text-[#ecba49] text-center">Login</h2>
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Email</label>
                                <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Enter your email" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-[#ecba49]">Password</label>
                                <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Enter your password" className="w-full p-2 rounded bg-gray-800 text-white border border-[#ecba49] placeholder-gray-400" required />
                            </div>
                            <button type="submit" className="w-full mt-4 cursor-pointer bg-[#ecba49] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition">
                                Login
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}