import React from 'react'
import { Link } from "react-router-dom";

function AddUserCard() {

    function calculateBirthday() {
        let today = new Date();
        // 3 is monrth 27 is day, 3-1 is because it starts with zero and want to specify properly
        var birthDay = new Date(today.getFullYear(), 3-1, 27);

        if (today.getMonth() == 11 && today.getDate() > 25) {
            birthDay.setFullYear(birthDay.getFullYear() + 1);
        }
        
        var one_day = 1000 * 60 * 60 * 24;
        console.log(Math.ceil((birthDay.getTime() - today.getTime()) / (one_day)) +
            " days before your birthday");
    }

    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Name: </label><input type="text"></input><br />
            <label>Image: </label><input type="text"></input><br />
            <label>Birthday: </label><input type="birthday"></input>
            <button className='addUser' onClick={calculateBirthday}>Submit</button>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default AddUserCard
