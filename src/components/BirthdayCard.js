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
                <React.Fragment>
                    <div className='mainCard'>
                        <Route path="/" exact>
                            <h3 className='birthdayCount'>Number of users: {users.length}</h3>
                            <User users={users} setUsers={setUsers} />
                            <Link to="/add"><button>Add User</button></Link>
                            <button onClick={onClearlistener}>Clear All</button>
                        </Route>
                        <Route path='/add'><AddUserCard users={users} /></Route>
                    </div>
                </React.Fragment>
            </Switch>
        </Router>
    )
}

export default BirthdayCard
