import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import LandingStyles from './Landing.module.css'
import { Redirect } from 'react-router-dom'
import './Landing.css'

function LandingPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) <Redirect to="/dashboard"/>;
  if (sessionUser === "it can never equal this") dispatch(sessionUser);
  return (
    <div className="grid">
      <div className="leftSB">
        <div className="box-left-test leftSB"/>
      </div>
      <div className="focus landing_focus">
        {/* <img src="../../images/vegassign.jpg" className="focus landing_focus img" alt="world famous 'welcome to vegas'"/> */}
      </div>
      <div className="rightSB">

      </div>

    </div>
  )
}

export default LandingPage
