import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddUserCard({ users, setUsers }) {
    const [name, setName] = useState();
    const [imageLink, setimageLink] = useState('https://source.unsplash.com/random');
    var month = 0;
    var day = 0;
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    function setNamef(e) {
        setName(e.target.value)

    }
    function setImageLinkf(e) {
        setimageLink(e.target.value)
    }
    function setMonth(e) {
        // month = e.target.value.replace(/-0+/g, '-').slice(5,6);
        // day = e.target.value.replace(/-0+/g, '-').slice(7,10);
        month = e.target.value;

    }
    function setDay(e) {
        day = e.target.value;
    }

    function onSubmit() {
        setUsers(users.concat({
            id: users.length + 1,
            name: name,
            image: imageLink,
            month: month,
            day: day
        }))
        // console.log('Day: ' + day + ' ' + 'Month: ' + month);

    }

    // https://source.unsplash.com/random
    return (
        <div className='adduserCard'>
            <h3 className='adduserTitle'>Add User</h3>
            <label>Name: </label><input onChange={setNamef} type="text" id='name'></input><br />
            <label>Image Link: </label><input onChange={setImageLinkf} value={imageLink} type="text"></input><br />
            <label>Month: </label><input onChange={setMonth} type="number" min="1" max="12" id='date'></input>
            <label>Day: </label><input onChange={setDay} type="number" min="1" max="31" id='date'></input>
            <Link to="/">
                <button onClick={onSubmit} className='addUser'>Submit</button>
            </Link>
        </div>
    )
}

export default AddUserCard
