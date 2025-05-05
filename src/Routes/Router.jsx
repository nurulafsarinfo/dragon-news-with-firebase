import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Components/pages/Home";
import CatagoryNews from "../Components/pages/CatagoryNews";
import Login from "../Components/pages/Login";
import Register from "../Components/pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement:  <div className='text-center my-20'> <span className=' loading loading-bars loading-4xl'></span></div>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:  <div className='text-center my-20'> <span className=' loading loading-bars loading-4xl'></span></div>

    },
    {
        path: '/',
        element: <h2>Error 404</h2>
    }
])

export default router;