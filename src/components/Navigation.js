import React from "react";
import { Link } from "react-router-dom";
import "../style/navigation.css"
function Navigation(){
    return(
        <div className="navbar">
            <Link to='/' className="link">Home</Link>
            <Link to='/about' className="link">About</Link>
            <Link to='/contact' className="link">Contact</Link>
        </div>
    )
        
    
}

export default Navigation

