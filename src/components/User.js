function User({ users, setUsers }) {
    return (
        <div>
            {
                users.map(function (user) {
                    let today = new Date();
                    // 3 is month 27 is day, 3-1 is because it starts with zero and want to specify properly
                    var birthDay = new Date(today.getFullYear(), user.month - 1, user.day);

                    if (today.getMonth() == 11 && today.getDate() > 25) {
                        birthDay.setFullYear(birthDay.getFullYear() + 1);
                    }

                    var one_day = 1000 * 60 * 60 * 24;

                    var bday = Math.ceil((birthDay.getTime() - today.getTime()) / (one_day)) +
                        " days before your birthday";

                    return (
                        <div className='card' key={Math.random() * 100}>
                            <img src={user.image} alt='photo' />
                            <div className='nameandage'>
                                <div className='name'>{user.name}</div>
                                <div className='info'>{user.info} Years</div>
                                <div className='info'>{bday}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User
