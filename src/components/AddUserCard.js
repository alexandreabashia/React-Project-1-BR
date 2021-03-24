import React from 'react'

function AddUserCard() {
    return (
        <div className='AddUserCard'>
            <h3 className='addUserTitle'>Add User</h3>
            <label>Name: </label><input type="text"></input><br/>
            <label>LastName: </label><input type="text"></input><br />
            <label>Birthday: </label><input type="birthday"></input>
            <button className='adduserbtn'>Add User</button>
        </div>
    )
}

export default AddUserCard
