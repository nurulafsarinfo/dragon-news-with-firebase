import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CatagoryNews = () => {
    const {id} = useParams();
    const newsData = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);
     

    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(newsData);
            return;
        }
        else if(id == "1"){
            const filterdNews = newsData.filter(news => news.others.is_today_pick == true );
            setCategoryNews(filterdNews);
        }
        else{
            const filterdNews = newsData.filter(news => news.category_id == id );
            
            setCategoryNews(filterdNews)
        }
    },[newsData, id])

    return (
        <div>
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'> {categoryNews.length}</span> news found</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CatagoryNews;