import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Blogs from "../Components/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blogs />
            }

        ]
    }

])
export default router