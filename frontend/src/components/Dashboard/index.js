import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation';
import LeftSideBar from '../LeftSideBar';
import LocalEvents from '../LocalEvents';
import MyFavorites from '../Favorites';
import Foots from '../Foots';

export default function Dashboard() {
  
  const sessionUser = useSelector(state => state.session.user);
  const [currentFocus, setCurrentFocus] = useState(null)




  const handleClick = (e) => {
    setCurrentFocus(e.target)
  }

  const userHome = () => {
    return (
      <div onClick={(e) => handleClick(e)}>
        <div className="nav_bar">
          <Navigation />
        </div>
        <div className="leftSB">
          <LeftSideBar />
        </div>
        <div className="main">
          {currentFocus}
        </div>
        <div className="rightSB">
          <div className="strains favs">
            <MyFavorites category="Strains"/>
          </div>
          <div className="events favs">
            <MyFavorites category="LocalEvents"/>
          </div>
          <div className="events">
            <LocalEvents />
          </div>
        </div>
        <div className="footer">
          <Foots />
        </div>

      </div>
    )
  }
  
  if(sessionUser){
      
      userHome()    
  }

  return (
    <div>
      
    </div>
  )
}
