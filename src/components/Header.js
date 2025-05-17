import { CDN_URL,LOGO_URL } from "../utils.js/constants";
const Header =()=>{
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
export default Header;