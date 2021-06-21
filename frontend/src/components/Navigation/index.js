import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="home-container" className="link-cont">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <ProfileButton user={sessionUser} />
      </>  
    );
  } else {
    sessionLinks = (
      <>
        <div id="signup-container" className="link-cont signup">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div id="home-container" className="link-cont home">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div id="login-container" className="link-cont login">
          <NavLink to="/login">Log In</NavLink>
        </div>

      </>
    );
  }


  return (
    <div id="header-nav-bar">
      {/* <div className="nav-links"> */}
        
          {isLoaded && sessionLinks}
      {/* </div> */}
    </div>
  );
}

export default Navigation;