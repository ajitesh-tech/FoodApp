import ResturantCard from "./ResturantCard";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
const  Body= ()=>{
    const [listOfResturant,setListOfResturant] = useState([]);
    const [listOfFilteredResturant,setListOfFilteredResturant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=> {
        fetchData();
    },[]);


    const fetchData= async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData= await response.json();
        const resData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resData);
        setListOfResturant(resData);
        setListOfFilteredResturant(resData);
    };
    
    const onLineStatus = useOnlineStatus();
    if(onLineStatus === false) return (<h1>Looks like you are offline</h1>)
    return  listOfResturant.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
            
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                   setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                    console.log(searchText);
                 let listOfName = listOfResturant.filter(resturent=>resturent.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 console.log(listOfName);
               setListOfFilteredResturant(listOfName);
                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={()=>{
                    console.log("Button Clicked");
                    setListOfResturant(listOfResturant.filter(res=>res.info.avgRating>4));
                }}>Top Rated Restaurant</button>
            </div>
            
            <div className="res-container">
                {
                    listOfFilteredResturant.map((item,index)=>
                   (<Link to={"/resturants/"+item.info.id} key={item.info.id}> <ResturantCard  res={item.info} /> </Link> )
                )
                }
            </div>
    
        </div>
    )
}
export default Body;
