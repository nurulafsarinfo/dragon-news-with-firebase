import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import LatestNews from '../../Components/LatestNews';
import Navbar from '../../Components/Navbar';
import LeftAside from '../../Components/homelayout/LeftAside';
import RightAside from '../../Components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-4'>
                <aside className='col-span-3 h-fit sticky top-2 '>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;