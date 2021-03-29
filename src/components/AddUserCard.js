import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddUserCard({ users, setUsers, calcBirthday }) {
    const [name, setName] = useState();
    const [imageLink, setimageLink] = useState();
    const [birthDay, setbirthDay] = useState();

    function setInfo(e){
        setName(e.target.value)
        setimageLink(e.target.value)
        setbirthDay(e.target.value.slice(5))
    }

    function addUser(){

    }
    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Name: </label><input onChange={setInfo} type="text" id='name'></input><br />
            <label>Image Link: </label><input onChange={setInfo} type="text" id='imageLink'></input><br />
            <label>Birthday: </label><input onChange={setInfo} type="date" id='date'></input>
            <Link to="/"><button onClick={addUser} className='addUser'>Submit</button></Link>
        </div>
    )
}

export default AddUserCard
