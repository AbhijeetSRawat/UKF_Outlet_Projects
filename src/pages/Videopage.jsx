import React from 'react'

export default function Videopage() {
  return (
    <div className='w-full h-full'>
        <video
                autoPlay
                muted
                playsInline
                loop
                controls
                className="w-full"
                key={open} 
            >
                <source src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8efe297b-b78d-4a43-954a-8b8fbc2ab804.mp4/productVideoOptimized.mp4' type="video/mp4" />
            </video>
            <div className='text-center'><a href="/"><button className='bg-[#ecba49] cursor-pointer p-2 my-5 font-semibold'>CLOSE PAGES</button></a></div>
    </div>
  )
}