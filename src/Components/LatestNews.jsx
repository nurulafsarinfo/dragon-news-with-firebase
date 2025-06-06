import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-7' pauseOnHover={true} speed={60} >
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos nihil quibusdam porro accusamus aliquam dignissimos rerum alias adipisci facere.</p>

                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos nihil quibusdam porro accusamus aliquam dignissimos rerum alias adipisci facere.</p>

                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos nihil quibusdam porro accusamus aliquam dignissimos rerum alias adipisci facere.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;