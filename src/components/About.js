import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("About Constructor"+props);
       
    }
   
    render(){
         return (
        <div className="about">
            About
            <UserClass/>
        </div>
    )
 }
}
export default About;