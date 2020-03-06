import React, { useEffect, useState } from 'react';
import UserList from './UserList'
import MyForm from './Form';

function App() {
  const [users, setUsers] = useState([]);

  const refreshUsers = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data._embedded.users);
      })
      .catch(console.log);
  }

  const handleAdd = async (user) => {
    if (!user.firstName) return;
    await fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: user.firstName, lastName: user.lastName
      })
    });
    refreshUsers();
  }

  useEffect(() => refreshUsers(), []);

  return (
    <div className="App">
      <MyForm handleAdd={handleAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
