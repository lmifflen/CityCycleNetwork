// import "./User.css";
import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";

function User() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/all").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  

  const createUser = () => {
    Axios.post("http://localhost:5000/signin", {
      name,
      email,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password,
        },
      ]);
    });
  };

  return (
    <div className="User">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Password: {user.password}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default User;

