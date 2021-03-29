import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddUserCard({ users, setUsers }) {
    const [name, setName] = useState();
    const [imageLink, setimageLink] = useState();
    const [birthDay, setbirthDay] = useState();
    var month = 0;
    var day = 0;

    function setNamef(e){
        setName(e.target.value)

    }
    function setImageLinkf(e){
        setimageLink(e.target.value)
    }
    function setDatef(e){
        month = e.target.value.replace(/-0+/g, '-').slice(5,6);
        day = e.target.value.replace(/-0+/g, '-').slice(7,10);

    }

    function onSubmit(){
        setUsers(users.concat({
            id: users.length + 1, 
            name: name, 
            image: imageLink, 
            month: month,
            day: day
        }))
        // console.log('Day: ' + day + ' ' + 'Month: ' + month);

    }

    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Name: </label><input onChange={setNamef} type="text" id='name'></input><br />
            <label>Image Link: </label><input onChange={setImageLinkf} type="text" id='imageLink'></input><br />
            <label>Birthday: </label><input onChange={setDatef} type="date" id='date'></input>
            <Link to="/">
                <button onClick={onSubmit} className='addUser'>Submit</button>
            </Link>
        </div>
    )
}

export default AddUserCard
