import React from 'react';
import AddUserCard from './AddUserCard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BirthdayCard({ users, setUsers, calcBirthday }) {

    const userComponent = users.map(function (user) {
        return (
            <div className='card' key={user.id}>
                <img src={user.image} alt='photo' />
                <div className='nameandage'>
                    <div className='name'>{user.name}</div>
                    <div className='info'>{user.age} Years</div>
                    <div className='info'>{user.dayCount} days before your birthday</div>
                </div>
            </div>
        )
    })

    function onClearlistener() {
        setUsers([])
    }

    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <div className='mainCard'>
                        <Route path="/" exact>
                            <h3 className='birthdayCount'>Number of users: {users.length}</h3>
                            {userComponent}
                            <Link to="/add"><button>Add User</button></Link>
                            <button onClick={onClearlistener}>Clear All</button>
                        </Route>
                        <Route path='/add'><AddUserCard users={users} setUsers={setUsers} calcBirthday={calcBirthday} /></Route>
                    </div>
                </React.Fragment>
            </Switch>
        </Router>
    )
}

export default BirthdayCard
