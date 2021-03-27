import { useEffect } from "react";

function User({ users, setUsers }) {
    useEffect(() => {
        calcBirthday();
    }, [])

    function calcBirthday() {
        setUsers(users.map(function (user) {
            let today = new Date();
            // 3 is month 27 is day, 3-1 is because it starts with zero and want to specify properly
            var birthDay = new Date(today.getFullYear(), user.month - 1, user.day);

            if (today.getMonth() == 11 && today.getDate() > 25) {
                birthDay.setFullYear(birthDay.getFullYear() + 1);
            }
            var one_day = 1000 * 60 * 60 * 24;
            return {
                ...user, dayCount: Math.ceil((birthDay.getTime() - today.getTime()) / (one_day))
            }
        }))

    }

    return (
        <div>
            {
                users.map(function (user) {
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

            }
        </div>
    )
}

export default User
