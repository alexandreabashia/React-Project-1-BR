import React from 'react'
import { Link } from "react-router-dom";

function AddUserCard({ users }) {

    // let day = 27;
    // let month = 3;

    // function calculateBirthday() {
    //     let today = new Date();
    //     // 3 is monrth 27 is day, 3-1 is because it starts with zero and want to specify properly
    //     var birthDay = new Date(today.getFullYear(), month-1, day);

    //     if (today.getMonth() == 11 && today.getDate() > 25) {
    //         birthDay.setFullYear(birthDay.getFullYear() + 1);
    //     }
        
    //     var one_day = 1000 * 60 * 60 * 24;
    //     console.log(Math.ceil((birthDay.getTime() - today.getTime()) / (one_day)) +
    //         " days before your birthday");
    // }

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
