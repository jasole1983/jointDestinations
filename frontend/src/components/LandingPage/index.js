// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import customPic from "./EWU2FGJKSDGO4SYKKZ4T37OLTE.jpg"
// import customPic2 from "./flor-bud-maconha-baseado-bolar-bolado-1630492-pxherecom.jpg"
// import customPic3 from "./shelves.jpg"
// import backgroundPic from "./vegassign.jpg"
import "./Landing.css"

// import styles from './Landing.module.css'

function LandingPage() {

  // const [ workInProgress, setWorkInProgress ] = useState(true)
  // const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(setWorkInProgress(true))
  // }, [dispatch])

    return (
        <>
          <div className="bkgrdImgContainer">
            {/* <img src={backgroundPic} className="background" alt="placeholder"/> */}
            <div className="leftImgContainer" />
              {/* <img src={customPic} className="images" alt="placeholder"/> */}
            
            <div className="centerImgContainer" />
              {/* <img src={customPic2} className="images" alt="placeholder"/> */}
            
            <div className="rightImgContainer" />
              {/* <img src={customPic3} className="images" alt="placeholder"/> */}
            
          </div>
        </>
    )
}

export default LandingPage
