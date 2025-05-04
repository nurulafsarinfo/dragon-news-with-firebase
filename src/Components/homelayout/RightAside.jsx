import React from 'react';
import SocialLogin from './SocialLogin';
import FindUS from '../FindUS';
import Qzone from '../Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUS></FindUS>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;