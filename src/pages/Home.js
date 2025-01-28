import React, { useEffect, useState } from "react";

function Home() {
    const [data, setData] = useState(0);
    const handleClick = () => {
        setData(data + 1)
    }
    // https://jsonplaceholder.typicode.com/posts
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error("Network response was not OK!")
                }
                const result = await response.json();
                console.log(result);
                
                setValue(result);
                console.log(`value: ${value}`);
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <center>
                <h1>
                    Home Page
                </h1>
                <button onClick={handleClick}>Click here</button>
                <h2>{`value=${data}`}</h2>
                <hr />
                <ul>
                    {
                        
                        value.map((values) => {
                            <li key={values.id} style={{ display: 'flex' }}>
                                <h4>{values.id}</h4>
                                <h4>&nbsp;{values.title}</h4>
                            </li>
                        })
                    }
                </ul>
            </center>
        </div>
    )
}

export default Home
