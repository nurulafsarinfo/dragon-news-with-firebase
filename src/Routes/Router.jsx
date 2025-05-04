import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Components/pages/Home";
import CatagoryNews from "../Components/pages/CatagoryNews";

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
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication Layout</h2>
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: '/',
        element: <h2>Error 404</h2>
    }
])

export default router;