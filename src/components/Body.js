import ResturantCard from "./ResturantCard";
import resData from "../utils.js/mockData";
import {useState} from "react";

const  Body= ()=>{
    const [listOfResturant,setListOfResturant] = useState(resData);
    return (
        <div className="boby">
            <div className="filter">

                <button className="filter-btn" onClick={()=>{
                    console.log("Button Clicked");
                    //listOfFilteredResturant= ;
                    setListOfResturant(listOfResturant.filter(res=>res.info.avgRating>4));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfResturant.map((item,index)=><ResturantCard key={item.info.id} res={item.info}/>)
                }
            </div>
    
        </div>
    )
}
export default Body;
