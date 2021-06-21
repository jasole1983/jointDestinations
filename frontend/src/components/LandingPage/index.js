import bkgd from './custombackgroun2d.jpg'
import underConst from './underconstruction.jpg'


function Landing(){

    let workInProgress = false;


    const background = workInProgress ? underConst : bkgd
    return (
        <div className="bkgrd-img-container">
            <img alt="under Construction" className="bkgrd-img" src={background}/>
        </div>
    )
}

export default Landing
