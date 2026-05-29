"use client";

import { useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

  
    const data = await response.json();

    
    console.log("API called",data);

    
    setUsers(data);
  };

  return (
    <div style={{ padding: "20px" }}>

      <button onClick={getUsers}>
        Load Users
      </button>

      {users.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  );
}