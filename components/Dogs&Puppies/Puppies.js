import Image from 'next/image'
import { useDeviceDetect } from '../../helpers/universalFunctions';

import classes from '../../styles/Puppies.module.scss'

const Puppies = props => {
    const { isMobile } = useDeviceDetect();
    const myLoader = () => props.img;
    return(
        <div className={isMobile ? classes.ImgDataContainerMob : classes.ImgDataContainer}>
            <div className={classes.ImageContainer}>
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
        </div>
    )
}

export default Puppies