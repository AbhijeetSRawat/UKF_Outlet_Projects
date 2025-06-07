import React, { useState } from 'react'
import { CiFacebook, CiLinkedin, CiYoutube } from 'react-icons/ci';
import { FaCaretDown, FaCaretUp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [open, setOpen] = useState(null);
  const toggles = (val) => {
    setOpen(open == val ? null : val)
  }
  return (
    <>
      <div className='w-full text-[#ecba49] bg-black  p-5 my-10 md:block  hidden '>
        <div className="flex justify-center items-center">
          <div className="flex w-full  justify-evenly">
            <div className='space-y-2'>
              <div><strong>Quicks Links</strong></div>
              <div><a className='hover:border-b' href={'/pent'}>Pent</a></div>
              <div><a className='hover:border-b' href={'/shirt'}>Shirt</a></div>
              <div><a className='hover:border-b' href={'/jeans'}>Jeans</a></div>
              <div><a className='hover:border-b' href={'/tshirt'}>Tshirt</a></div>
              <div><a className='hover:border-b' href={'/shoes'}>Shoes</a></div>
              <div><a className='hover:border-b' href={'/summerwear'}>Summer wear</a></div>

            </div>

            <div className='space-y-2'>
              <div><strong>Get In Touch <br /> </strong>Ground floor bhawani plaza, <br /> chandpol, gate, Subhash Chowk, <br /> Sikar, Rajasthan 332001</div>
              <div><strong>Mobile Number :</strong>+91 8741-930153</div>

            </div>
            <div className='space-y-2'>
              <div><strong>Follow Us</strong></div>
              <div className="flex gap-3 items-center ">
                <div className="bg-[#ecba49] text-black p-1"><FaInstagram /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiFacebook /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiYoutube /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiLinkedin /></div>
              </div>
            </div>
            <div className='flex  justify-center gap-3'>

            </div>
          </div>
        </div>
      </div>
      <div className='w-full text-[#ecba49] bg-black py-2 my-10 md:hidden block '>
        <div className="grid grid-cols-1">

          <div className='space-y-2  p-2'>
            <div className='space-y-2 border p-2'>
              <div onClick={() => toggles('one')} className='flex items-center justify-between'><strong>Quick Links</strong>{open == 'one' ? <FaCaretDown /> : <FaCaretUp />}</div>
              <div className={`space-y-2 transition-all duration-500 overflow-hidden ${open == 'one' ? "h-auto" : "h-0"}`}>

                <div><a className='hover:border-b' href={'/pent'}>Pent</a></div>
              <div><a className='hover:border-b' href={'/shirt'}>Shirt</a></div>
              <div><a className='hover:border-b' href={'/jeans'}>Jeans</a></div>
              <div><a className='hover:border-b' href={'/tshirt'}>Tshirt</a></div>
              <div><a className='hover:border-b' href={'/shoes'}>Shoes</a></div>
              <div><a className='hover:border-b' href={'/summerwear'}>Summer wear</a></div>
              </div>

            </div>
            <div className='space-y-2 border p-2'>
              <div onClick={() => toggles('three')} className='flex items-center justify-between'><strong>Get In Touch</strong>{open == 'three' ? <FaCaretDown /> : <FaCaretUp />}</div>
              <div className={`space-y-2 transition-all duration-500 overflow-hidden ${open == 'three' ? "h-auto" : "h-0"}`}>
                <div><strong> <br /> </strong>Ground floor bhawani plaza, <br /> chandpol, gate, Subhash Chowk, <br /> Sikar, Rajasthan 332001</div>
                <div><strong>Mobile Number :</strong>+91 8741-930153</div>
              </div>

            </div>
            <div className="border p-2">
              <div onClick={() => toggles('two')} className='flex items-center justify-between p-2'><strong>Connect With Us</strong>{open == 'two' ? <FaCaretDown /> : <FaCaretUp />}</div>
              <div className={`space-y-2 flex gap-3 items-center transition-all duration-500 overflow-hidden ${open == 'two' ? 'h-auto' : 'h-0'}`}>

                <div className="bg-[#ecba49] text-black p-1"><FaInstagram /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiFacebook /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiYoutube /></div>
                <div className="bg-[#ecba49] text-black p-1"><CiLinkedin /></div>

              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  )
}
