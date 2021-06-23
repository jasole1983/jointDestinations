import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import LandingPage from "./components/LandingPage/index";
import Navigation from './components/Navigation/index'
// import styles from './styling.module.css'
import Dashboard from './components/Dashboard/index';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


 

  
  return (
    <>
    
        <Navigation isLoaded={isLoaded}/>
          <LandingPage />
      

        <Switch>
          <Route path="/signup">

          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>    
          <Route path="/events">
            
          </Route>
          <Route path="/featured">
          
          </Route> 
          <Route path="/checkin">

          </Route>
        </Switch>       
       
    </>
  )
}

export default App;
