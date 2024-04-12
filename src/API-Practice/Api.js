import React, { useState } from 'react';
import axios from 'axios'
const Api = () => {

    const [user,setUser]=useState([]);

    const onGetUser = async ()=>{

         const result= await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(result.data)
    }

    return (
        <div>
       <ul>
        {
            user.map((name)=>(
                <li>{name.name}</li>
            ))
        }
       </ul>
        
            
            <button className='btn btn-success' onClick={onGetUser}>Get api Info</button>
        </div>
    );
};

export default Api;