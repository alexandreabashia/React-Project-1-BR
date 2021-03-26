import React from 'react'
import { Link } from "react-router-dom";

function AddUserCard({ users }) {
    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Fullname: </label><input type="text"></input><br />
            <label>Image Link: </label><input type="text"></input><br />
            <label>Birthday: </label><input type="date"></input>
            <button className='addUser'>Submit</button>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default AddUserCard
