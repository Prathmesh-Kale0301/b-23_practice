import React, { useState } from 'react';

const Variables =()=>{

   const [name,setName]= useState("kale");

    const onChangeValue=()=>{
        setName("prathmesh");
    }

    return(
        <div className='container'>
            <div className='row'>
                <h1>{name}</h1>
                <div className='col-3'>

                <button className='btn btn-primary' onClick={onChangeValue}>Change</button>
                </div>
            </div>
        </div>
    )
}

export default Variables;