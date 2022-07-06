import { useDeviceDetect } from '../../helpers/universalFunctions';
import Image from 'next/image'
import AboutCover from '../../assets/Img/AboutCover.jpeg'

import classes from '../../styles/About.module.scss'

const AboutCoverImage = () => {
    const { isMobile } = useDeviceDetect();
    return(
        <div className={isMobile ? classes.AboutCoverImageWrapperMob : classes.AboutCoverImageWrapper}>
            <div className={classes.AboutCoverImageContainer}>
                <Image 
                    src={AboutCover}
                    alt='Corgi'
                    layout="responsive"
                    width={1275}
                    height={1075}
                    unoptimized={true}
                />
            </div>
        </div>
    )
}

export default AboutCoverImage