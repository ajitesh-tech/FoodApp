import { CDN_URL } from "../utils.js/constants";

const styleCard={
    backgroundColor:"#f0f0f0"
}

const ResturantCard = ({res})=>{
    const {name,cuisines,avgRating,cloudinaryImageId}=res;
   return (
    <div className="res-card" style={styleCard}>
        <img  className="res-logo" alt="res-logo" src={CDN_URL.concat(cloudinaryImageId)}/>
        <h1>{name}</h1>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
        <h4>38min</h4>
      
    </div>
   )
}
export default ResturantCard;