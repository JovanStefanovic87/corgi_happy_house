import { useDeviceDetect } from '../../helpers/universalFunctions';
import Image from 'next/image'
import CorgiMob from '../../assets/Img/CorgiHomepageMob.jpg'
import CorgiPc from '../../assets/Img/CorgiHomepagePc.jpg'

import classes from '../../styles/About.module.scss'

const MainImage = () => {
    const { isMobile } = useDeviceDetect();
    const mainImage = isMobile ? CorgiMob : CorgiPc
    
    return(
        <div className={isMobile ? classes.AboutCoverImageWrapperMob : classes.AboutCoverImageWrapper}>
            <div className={classes.AboutCoverImageContainer}>
                <Image 
                    src={mainImage}
                    alt='Corgi'
                    title='CorgiHappyHouse'
                    layout="responsive"
                    width={isMobile ? 365 : 604}
                    height={isMobile ? 467 : 608}
                    unoptimized={true}
                />
            </div>
        </div>
    )
}

export default MainImage