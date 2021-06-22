// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import customPic from "./EWU2FGJKSDGO4SYKKZ4T37OLTE.jpg"
import customPic2 from "./flor-bud-maconha-baseado-bolar-bolado-1630492-pxherecom.jpg"
import customPic3 from "./shelves.jpg"
import backgroundPic from "./vegassign.jpg"

import styles from './Landing.module.css'

function LandingPage () {

  // const [ workInProgress, setWorkInProgress ] = useState(true)
  // const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(setWorkInProgress(true))
  // }, [dispatch])

    return (
        <>
          <div className={styles.bkgrdImgContainer}>
            <img src={backgroundPic} className={styles.background} alt="placeholder"/>
            <div className={styles.leftImgContainer} >
              <img src={customPic} className={styles.images} alt="placeholder"/>
            </div>
            <div className={styles.centerImgContainer} >
              <img src={customPic2} className={styles.images} alt="placeholder"/>
            </div>
            <div className={styles.rightImgContainer} >
              <img src={customPic3} className={styles.images} alt="placeholder"/>
            </div>
          </div>
          <div className={styles.gapmaker}>

          </div>
        </>
    )
}

export default LandingPage
