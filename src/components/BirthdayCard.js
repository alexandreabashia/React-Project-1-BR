import React from 'react';
import User from './User';
import Data from './Data';

function BirthdayCard({ users, setUsers }) {

    function onClearlistener(){
        setUsers([])
    }

    return (
        <div className='birthdayCard'>
            <h3 className='birthdayCount'>{users.length} Birthdays today</h3>
            <User users={users} setUsers={setUsers} />
            <button onClick={onClearlistener}>Clear All</button>
        </div>
    )
}

export default BirthdayCard
