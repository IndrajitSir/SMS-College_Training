import React, { useState } from "react";

function Home(){
    const [data, setData] = useState(0);
    const handleClick=()=>{
        setData(data+1)
    }
    return(
        <div>
            <center>
            <h1>
            Home Page
            </h1>
            <button onClick={handleClick}>Click here</button>
            <h2>{`value=${data}`}</h2>
            </center>
        </div>
    )
        
    
}

export default Home
