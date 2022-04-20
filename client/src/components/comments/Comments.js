import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Comments = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [backendUsers, setBackendUsers] = useState();


  const finduseremail = async () => {
    try {
      if (user == null) setBackendUsers(null)
      let email = user.email
      let response = await fetch(`/findusersbyemail?email=${email}`);
      let allusers = await response.json();
          return setBackendUsers(allusers);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    finduseremail();
  }, [isAuthenticated]);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <div>
        {isAuthenticated && backendUsers != null &&
          backendUsers.map((backuser) => <p>{backuser.email}</p>)}
      </div>
    </div>
  );
};
export default Comments;
