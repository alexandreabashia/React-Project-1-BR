import React from 'react';
import User from './User';
import AddUserCard from './AddUserCard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BirthdayCard({ users, setUsers }) {

    function onClearlistener() {
        setUsers([])
    }

    return (
        <Router>
            <Switch>
            <div className='mainCard'>
                <Route path="/" exact>
                    <h3 className='birthdayCount'>{users.length} Birthdays today</h3>
                    <User users={users} setUsers={setUsers} />
                    <button onClick={onClearlistener}>Clear All</button>
                    <Link to="/add"><button>Add user birthday</button></Link>

                </Route>
                <Route path="/add" exact component={AddUserCard} />
            </div>
        </Switch>
        </Router>
    )
}

export default BirthdayCard
