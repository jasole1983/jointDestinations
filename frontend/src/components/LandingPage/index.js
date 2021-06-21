import React, { useState, useEffect } from 'react'
import { dispatch } from 'react-redux'


function Landing(){
    const [workInProgress, setWorkInProgress] = useState(false)

    useEffect(() => {
        dispatch(setWorkInProgress(true))
    }, [workInProgress])

    const background = workInProgress ? <img src='./underconstruction.jpg' /> : <img src='./custombackgroun2d.jpg' class="bkgrd-img" />

    return (
        <div class="bkgrd-img-container">
                {background}
                {setTimeout( () => {
                    return setWorkInProgress(true)
                }, 5000)}
        </div>
    )
}

export default Landing