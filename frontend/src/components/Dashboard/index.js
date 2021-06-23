import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  
  const sessionUser = useSelector(state => state.session.user);
  
  const userHome = (
      <>
        <div className="nav_bar">
          <Navigation />
        </div>



      </>
  )
  
  if(sessionUser){
    sessionDash = (

    )
  }

  return (
    <div>
      
    </div>
  )
}
