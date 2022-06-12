import React from "react";
import "./Header.css";
import userImage from "../images/user-profile-svgrepo-com.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <h2 className='appTitle'>MovieApp</h2>
      </Link>
      <img className='profileImage' src={userImage} alt='MovieApp' />
    </div>
  );
}

export default Header;
