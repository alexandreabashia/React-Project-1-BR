import React from 'react';
import User from './User';

const style = {
    color: "#fff",
    border: '1px solid red',
    letterSpacing: 3
  };

function BirthdayCard() {

    return (
        <div style={style}>
            <h3>5 Birthdays today</h3>
            <User />
        </div>
    )
}

export default BirthdayCard
