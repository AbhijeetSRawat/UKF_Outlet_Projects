import React, { useEffect, useState } from 'react';

export default function Slider() {
    const videos = [
        'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8efe297b-b78d-4a43-954a-8b8fbc2ab804.mp4/productVideoOptimized.mp4',
        'https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/479677514190/123f059f-6de6-454c-931f-72222c3993e6/3ed1af4b-1054-434b-acf0-299a2c3e16b8/1678958564571sbv.mp4',
        'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/14ee4e45-8490-4bc1-a022-d2b7a644c369.mp4/productVideoOptimized.mp4',
        'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/01659115-4a78-4ab0-be2e-bc79eb900630.mp4/productVideoOptimized.mp4',
        'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1bd136c4-3255-4f18-b8ea-51bbc63ac1c6.mp4/productVideoOptimized.mp4',
    ];
    
    const [open, setOpen] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpen((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-full'>
         <a href="/videopage">
            <video
                autoPlay
                muted
                
                loop
                
                className="w-full"
                key={open} 
            >
                <source src={videos[open]} type="video/mp4" />
            </video>
            </a>
        </div>
    );
}
