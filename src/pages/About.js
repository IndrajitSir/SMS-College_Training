import React from "react";
import { Link, Outlet } from "react-router-dom";
function About(){
    return(
        <div>
            <center>
            <h1>
            About Page
            </h1>
            <Link to='/about/profile'>Profile</Link>
            <Link to='/about/account'>Account</Link>
            </center>
            <Outlet/>
        </div>
    )
        
    
}

export default About

