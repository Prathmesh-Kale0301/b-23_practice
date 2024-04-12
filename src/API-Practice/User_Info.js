import React, { useState } from 'react';
import axios from 'axios';

const User_Info = () => {

    const [user, setuserIno] = useState([]);

    const onGetuser = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setuserIno(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <button className='btn btn-primary' onClick={onGetuser}>get info</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User_Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            user.map((userInfo) => {
                                
                               return( <tr>
                                    <td>{userInfo.id}</td>
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.username}</td>
                                    <td>{userInfo.email}</td>
                                    <td>{userInfo.website}</td>
                                </tr>)
                            })


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User_Info;