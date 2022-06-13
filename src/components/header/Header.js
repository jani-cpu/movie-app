import React, { useState } from "react";
import "./Header.css";
import userImage from "../images/user-profile-svgrepo-com.svg";
import { Link } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const userShowHandler = () => {
    setShowModal(!showModal);
  };
  // const userDntShowHandler = () => {
  //   setShowModal(false);
  // };
  return (
    <div className='header'>
      <Link to='/'>
        <div className='headerElement'>
          <img
            className='logoImage'
            src='https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI'
            alt='MovieApp'
          />
          <h2 className='appTitle'>MovieApp</h2>
        </div>
      </Link>
      <img
        onClick={userShowHandler}
        // onMouseLeave={userDntShowHandler}
        className='profileImage'
        src={userImage}
        alt='MovieApp'
      />
      {showModal && <UserProfile userShowHandler={userShowHandler} />}
    </div>
  );
}

export default Header;
