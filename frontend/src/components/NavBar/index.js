import ProfileButton from "../Navigation/ProfileButton";
// import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { setCurrentFocus } from "../Dashboard/index"


export default function NavBar() {

  // const [dropDownStatus, setDropDownStatus] = useState(false)
  // const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  function handleNavClick(e){
    setCurrentFocus(e.target.value)
  }
  return (
      <header className="nav_bar">
        <h1 className="inner_nav_bar_left">
          <span className="nav_bar_title">UNLIT</span>
        </h1>
        <nav className="inner_nav_bar_mid">
          <button className="mid_button" value="flowers" onClick={(e) => handleNavClick(e)}>Flowers</button>
          <button className="mid_button" value="dispensaries" onClick={(e) => handleNavClick(e)}>Dispensaries</button>
          <button className="mid_button" value="reviews" onClick={(e) => handleNavClick(e)}>Recent Reviews</button>
          <button className="mid_button" value={{my_favorites: userId}} onClick={(e) => handleNavClick(e)}>My Favorites</button>
        </nav>
        <div className="inner_nav_bar_right">
          <ProfileButton />
        </div>
      </header>
  )
}







