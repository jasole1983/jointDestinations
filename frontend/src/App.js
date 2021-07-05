// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import * as sessionActions from "./store/session";
// import LandingPage from "./components/LandingPage/index";
// import Navigation from './components/Navigation/index'
import Dashboard from './components/Dashboard/index';
import Footer from "./components/Footer/index"
// import AddFlowerForm from "./components/AddFlower";



function App() {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);


 

  
  return (
    <>
      <Switch>
        {/* <Route exact path="/">
          <Navigation isLoaded={isLoaded}/>
          <LandingPage />
        </Route> */}
        <Route exact path="/">
          <Dashboard />
        </Route>    
      </Switch>
      <Footer />       
    </>
  )
}

export default App;
