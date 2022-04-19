import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Comments = ({currentUserId}) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [backendUsers, setBackendUsers] = useState([]);

  const getallusers = async () => {
    try {
      let response =await fetch("/allusers");
      let allusers = await response.json();
      return setBackendUsers(allusers)
    }catch (ex) {
      console.log(ex);
    }
  }

useEffect(() => {
  getallusers();
}, [])

  return (
  <div>Hello Comments</div>
|<div>{isAuthenticated && (<div>{backendUsers.map(backuser => <p>Hello {backuser.email}</p>)}</div>)}</div>)
}

        export default Comments