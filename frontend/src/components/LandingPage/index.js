


function Landing(){

    let workInProgress = true;


    const background = workInProgress ? <img src='./underconstruction.jpg' /> : <img src='./custombackgroun2d.jpg' class="bkgrd-img" />

    return (
        <div class="bkgrd-img-container">{background}</div>
    )
}

export default Landing
