import { useT } from "../../context/LanguageContext";
import Layout from '../Layout/Layout'
import Puppies from '../Dogs&Puppies/Puppies'

import classes from '../../styles/Puppies.module.scss'

const Gallery = props => {
    const t = useT();

    return (
        <Layout>
            <>
                <h2>{t?.gallery_nav}</h2>
                <div className={classes.Gallery}>
                    {
                        props.galleryData.map((obj, i) => {
                            return(
                                <Puppies 
                                    name={obj.name}
                                    img={`${process.env.LOCAL_DOMAIN}${obj.photo.data .attributes.url}`}
                                    index={i}
                                    key={i}
                                    width={obj.photo.data.attributes.width}
                                    height={obj.photo.data.attributes.height}
                                />

                            )
                        })
                    }
                </div>
            </>
        </Layout>
    )
}

export default Gallery