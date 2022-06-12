import React from "react";
import "./UserProfile.css";

function UserProfile() {
  const sigOutHandler = () => {};
  return (
    <div className='userProfileContainer'>
      <p>About Me</p>
      <p onClick={sigOutHandler}>Sign Out</p>
      <p>My Watchlist</p>
    </div>
  );
}

export default UserProfile;
