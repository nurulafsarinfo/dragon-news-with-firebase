import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../homelayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    
    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    },[data, id])

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='fotn-bold col-span-9  mb-5'>
                   <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;