import React from 'react';
import User from './User';

function BirthdayCard() {

    return (
        <div class='birthdayCard'>
            <h3 className='birthdayCount'>7 Birthdays today</h3>
            <User />
            <button>Clear All</button>
        </div>
    )
}

export default BirthdayCard
