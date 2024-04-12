import React, { useState } from 'react';

const Dyanamic_Class = () => {

    const[dyanamicClass,setDyanamicClass]=useState('bg-secondary');

    const onChangeBg=(classname)=>{
        setDyanamicClass(classname);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div className={`p-3 ${dyanamicClass}`}>
                        div-1
                    </div>
                </div>
                <div className='col-3'>
                    Div-1
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={()=>onChangeBg("bg-primary")}>Add Primary</button>
                    <button className='btn btn-danger mt-1' onClick={()=>onChangeBg("bg-danger")}>Add Danger</button>
                </div>
               
            </div>
        </div>
    );
};

export default Dyanamic_Class;