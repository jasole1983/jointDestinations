import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import Navigation from '../Navigation';
import LeftSideBar from '../LeftSideBar';
import LocalEvents from '../LocalEvents';
import MyFavorites from '../Favorites';
import Footer from '../Footer';
import NavBar from '../NavBar/index'
import Focus from '../Focus/index'
import './Dashboard.css'


export default function Dashboard() {
  
  const sessionUser = useSelector(state => state.session.user);
  const [currentFocus, setCurrentFocus] = useState(null)

  

  const handleClick = (e) => {
    setCurrentFocus(e.target.value)
  }

  const userHome = () => {
    return (
      <div className="dashboard grid" >
        <div className="nav_bar">
          <NavBar />
        </div>
        <div className="leftSB">
          <LeftSideBar />
        </div>
        <div className="main">
          <Switch>
            <Flower />
            <Dispensary />
          </Switch>
        </div>
        <div className="rightSB">
          <div className="fav_flowers">
          </div>
          <div className="recent_history">
          </div>
          <div className="upcoming">
          </div>
        </div>
        <div className="footer" onClick={(e) => handleClick(e)}>
          <Footer />
        </div>

      </div>
    )
  }
  
  if(sessionUser){
      
      userHome()    
  }

  return (
    <div className="dashboard grid" >
      <div className="nav_bar">
        <NavBar />
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
      <div className="footer" onClick={(e) => handleClick(e)}>
        <Footer />
      </div>

    </div>
  )
}
