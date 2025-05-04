import React from 'react';
import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playImg from "../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold text-2xl mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;