import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING




const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);