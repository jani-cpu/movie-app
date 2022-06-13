import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile(props) {
  const sigOutHandler = () => {
    props.userShowHandler();
  };
  return (
    <div className='userProfileContainer'>
      <p>My Profile</p>
      <p>My Watchlist</p>
      <Link to='login'>
        <p onClick={sigOutHandler}>Sign Out</p>
      </Link>
    </div>
  );
}

export default UserProfile;
