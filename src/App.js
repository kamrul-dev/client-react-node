
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div className="App">
      <h2>Users Data: {users.length}</h2>
      {
        users.map(user => <li key={user.id}>id: {user.id} Name: {user.name} Email: {user.email}</li>)
      }
    </div>
  );
}

export default App;
