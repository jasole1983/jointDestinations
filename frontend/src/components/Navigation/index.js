import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="home-container" className={styles.NavLinkDiv}>
        <button className={styles.NavLinkButton}>     
          <NavLink exact to="/"><i className="fas fa-cannabis"/></NavLink>
        </button>
        </div>
        <ProfileButton user={sessionUser} />
      </>  
    );
  } else {
    sessionLinks = (
      <>
        <div id="home-container" className={styles.NavLinkDiv}>
          <button className={styles.NavLinkButton}> 
            <NavLink exact to="/" className={styles.NavBarLink}><i className="fas fa-cannabis"/></NavLink>
          </button>
        </div>
        <div id="signup-container" className={styles.NavLinkDiv}>
          <button className={styles.NavLinkButton}><NavLink to="/signup" className={styles.NavBarLink}>SIGNUP</NavLink></button>
        </div>
        <div id="login-container" className={styles.NavLinkDiv}>
          <button className={styles.NavLinkButton}><NavLink to="/login" className={styles.NavBarLink}>LOGIN</NavLink></button>
        </div>

      </>
    );
  }


  return (
    <div className={styles.Header}>
      <div className={styles.Title}>UNLIT</div>
      <div className={styles.directory}>
        <div id="checkin-div" className={styles.dirLinkCont}>
          <NavLink to="/checkin" className={styles.dirNavLink}>Check-In</NavLink>
        </div>
        <div id="nearby-div" className={styles.dirLinkCont}>
          <NavLink to="/nearby" className={styles.dirNavLink}>Events Near Me</NavLink>
        </div>
        <div id="review-div" className={styles.dirLinkCont}>
          <NavLink to="/reviews" className={styles.dirNavLink}>Highest Rated</NavLink>
        </div>
      </div>
      <div className={styles.HomeLogSign}>
          {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;