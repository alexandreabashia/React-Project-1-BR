import './App.css';
import BirthdayCard from './components/BirthdayCard'
import { useEffect, useState,  } from 'react';
import { usersData } from './components/Data';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    calcBirthday();
}, [])

  function calcBirthday() {
    setUsers(users.map(function (user) {
      let today = new Date();
      // 3 is month 27 is day, 3-1 is because it starts with zero and want to specify properly
      var birthDay = new Date(today.getFullYear(), user.month - 1, user.day);

      if (today.getMonth() === 11 && today.getDate() > 25) {
        birthDay.setFullYear(birthDay.getFullYear() + 1);
      }
      var one_day = 1000 * 60 * 60 * 24;
      return {
        ...user, dayCount: Math.ceil((birthDay.getTime() - today.getTime()) / (one_day))
      }
    }))

  }

  return (
    <div className="App">
      <BirthdayCard users={ users } setUsers={ setUsers } usersData={ usersData } />
    </div>
  );
}

export default App;
