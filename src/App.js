import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/ResturantMenu";


//https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"resturants/:resId",
                    element:<RestaurantMenu/>
                },
                {
                     path:"/grocery",
                    element:<Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>
                }
            ],
            errorElement:<Error/>
        }
    ] 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);