import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";

export const  router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:'/services',
            element:<Services/>
        }
    ]
}])