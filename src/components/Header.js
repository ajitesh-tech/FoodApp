import { CDN_URL,LOGO_URL } from "../utils.js/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
const Header =()=>{
    let btnName="Login";
    const [btnNameReact,setbtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus ? "🟢":"🔴"}</li>
                   <li><Link to="/">Home</Link> </li> 
                   <li> <Link to="/about">About</Link> </li> 
                  <li> <Link to="/contact">Contact</Link> </li>  
                    <li><Link to="/contact">Cart</Link></li>
                     <li><Link to="/grocery">Grocery</Link></li>
                    <li>
                        <button className="login" onClick={()=>{
                            if(btnNameReact=="Login"){
                                setbtnNameReact("Logout");
                            }
                            else{
                                setbtnNameReact("Login");
                            }
                           
                            console.log(btnNameReact)
                        }}>{btnNameReact}</button>
                        </li>
                </ul>
            </div>

        </div>
    )
}
export default Header;