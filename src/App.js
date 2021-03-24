import './App.css';
import BirthdayCard from './components/BirthdayCard'
import { useState } from 'react';
import Data from './components/Data';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState(Data);
  
  return (
    <div className="App">
        <BirthdayCard users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
