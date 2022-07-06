import Image from 'next/image'
import { useDeviceDetect } from '../../helpers/universalFunctions';

import classes from '../../styles/Dogs.module.scss'

const Dogs = props => {
    const { isMobile } = useDeviceDetect();
    const myLoader = () => props.img;
    return(
        <div className={isMobile ? classes.ImgDataContainerMob : classes.ImgDataContainer}>
            <h3>{props.name}</h3>
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
            <div className={classes.DataContainer}>
                <p style={{display: props.fullName ? 'block' : 'none'}}>{props.fullName}</p>
                <p>{props.dateOfBirth}</p>
                <p>{props.states}</p>
                <p>{props.medicalResults}</p>
                <p>{props.awards}</p>
            </div>
        </div>
    )
}

export default Dogs