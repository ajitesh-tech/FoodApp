import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResturantHook from "../utils.js/useResturantMenu";

const RestaurantMenu =()=>{
    const {resId} = useParams();
    const resInfo  = useResturantHook(resId);
    console.log(resId);
    if(resInfo===null) return  (<Shimmer/>) ;
    const {name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[2]?.card?.card.info;
   const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log(itemCards);
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>price:{costForTwoMessage}</h1>
            <ul>
                    {itemCards?.map((item)=><li key={item.card.info.id}> {item.card.info.name}---{item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
            </ul>
        </div>
    );
};
export default RestaurantMenu;