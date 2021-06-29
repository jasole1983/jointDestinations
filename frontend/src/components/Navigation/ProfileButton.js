import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className='navi_btn' id="new_flower">
        <i className='fas fa-cannabis' />
      </button>
      <button onClick={openMenu} className='navi_btn' id="drop_down">
        <i className="fas fa-joint" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="profile-option">{user.username}</li>
          <li className="profile-option">{user.email}</li>
          <li className="profile-option">
            <button className="profile-button">
              <Link to={`/users/${sessionUser.id}/settings`}>Settings</Link>
            </button>
          </li>
          <li className="profile-option">
            <button onClick={logout} className="profile-button">Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;