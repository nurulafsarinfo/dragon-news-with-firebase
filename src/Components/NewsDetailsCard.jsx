import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    return (

        <div className='mt-8 mx-5 space-y-5'>
            <h2 className='font-bold text-3xl'>News Details</h2>
            <img className='w-full h-[350px] rounded-lg object-cover ' src={news.image_url} alt="" />
            <h2 className='text-2xl'>{news.title}</h2>
            <p>{news.details}</p>

            <Link className='btn btn-secondary px-10 py-1' to={`/category/${news.category_id}`}> Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;