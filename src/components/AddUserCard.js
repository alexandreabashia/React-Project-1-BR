import React from 'react'
import { Link } from "react-router-dom";

function AddUserCard() {

    function calculateBirthday(){
        const currentTime = new Date();
        var myBirthDay = new Date(currentTime.getFullYear(), 9, 27);
        console.log(myBirthDay.toDateString());
        console.log(currentTime.toDateString());
        console.log(myBirthDay - currentTime);
    }

    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Name: </label><input type="text"></input><br/>
            <label>Image: </label><input type="text"></input><br />
            <label>Birthday: </label><input type="birthday"></input>
            <button className='addUser' onClick={calculateBirthday}>Submit</button>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default AddUserCard
