import bkgd from './custombackground3.jpg'
import underConst from './underconstruction.jpg'
import styles from './Landing.module.css'

function Landing(){

    let workInProgress = false;


    const background = workInProgress ? underConst : bkgd
    return (
        <div className={styles.bkgrdImgContainer}>
            <img alt="under Construction" className={styles.bkgrdImg} src={background}/>
        </div>
    )
}

export default Landing
