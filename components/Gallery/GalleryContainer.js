import Image from 'next/image'
import { useDeviceDetect } from '../../helpers/universalFunctions';

import classes from '../../styles/Gallery.module.scss'

const GalleryContainer = props => {
    const { isMobile } = useDeviceDetect();
    const myLoader = () => props.img;
    return(
            <div className={isMobile ? classes.ImageContainerMob : classes.ImageContainer}>
                <Image 
                    loader={myLoader}
                    src={props.img}
                    alt={props.name}
                    width={props.width}
                    height={props.height}
                    layout="responsive" 
                    priority={props.index === 0}
                    unoptimized={true}
                />
            </div>
    )
}

export default GalleryContainer