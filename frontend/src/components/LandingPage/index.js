// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import customPic from "../../images/EWU2FGJKSDGO4SYKKZ4T37OLTE.jpg"
import customPic2 from "../../images/flor-bud-maconha-baseado-bolar-bolado-1630492-pxhere.com.jpg"
import customPic3 from "../../images/shelves.jpg"

import styles from './Landing.module.css'

function LandingPage () {

  // const [ workInProgress, setWorkInProgress ] = useState(true)
  // const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(setWorkInProgress(true))
  // }, [dispatch])

    return (
        <div className={styles.bkgrdImgContainer}>
            <div className={styles.leftImgContainer} >
                <img src={customPic3} className={styles.images} alt="placeholder"/>
            </div>
            <div className={styles.centerImgContainer} >
                <img src={ customPic2}className={styles.images} alt="placeholder"/>
            </div>
            <div className={styles.rightImgContainer} >
                <img src={customPic3} className={styles.images} alt="placeholder"/>
            </div>
        </div>
    )
}

export default LandingPage
