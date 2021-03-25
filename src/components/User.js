
function User({ users, setUsers }) {
    return (
        <div>
            {
                users.map(function (user) {
                    return (
                        <div className='card' key={Math.random() * 100}>
                            <img src={user.image} alt='photo' />
                            <div className='nameandage'>
                                <div className='name'>{user.name}</div>
                                <div className='age'>{user.age} Years</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User
