import { useState, useEffect } from 'React'
import { dispatch } from 'react-redux'


function Landing(){
    const [workInProgress, setWorkInProgress] = useState(false)

    useEffect(() => {
        dispatch({setWorkInProgress()})
    }, [workInProgress])

    const background = workInProgress ? <img src='./underconstruction.jpg' /> : <img src='./custombackgroun2d.jpg' class="bkgrd-img" />

    return (
        <div class="bkgrd-img-container">
                {background}
                {setTimeout(setWorkInProgress, 5000)}
        </div>
    )
}

export default Landing