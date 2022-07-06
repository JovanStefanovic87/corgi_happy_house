import { useT } from "../../context/LanguageContext";
import Layout from '../Layout/Layout'
import Puppies from '../Dogs&Puppies/Puppies'

import classes from '../../styles/Puppies.module.scss'

const OurPuppies = props => {
    const t = useT();

        return(
            <Layout>
                <>
                    <h2>{t?.puppies_nav}</h2>
                    <div className={classes.Gallery}>
                        {
                            props.ourPuppiesData.map((puppie, i) => {
                                return(
                                    <Puppies 
                                        name={puppie.name}
                                        img={`${process.env.LOCAL_DOMAIN}${puppie.photo.data.attributes.url}`}
                                        fullName={puppie?.fullName}
                                        dateOfBirth={puppie.dateOfBirth}
                                        states={puppie.states}
                                        medicalResults={puppie.medicalResults}
                                        awards={puppie.awards}
                                        index={i}
                                        key={i}
                                        width={puppie.photo.data.attributes.width}
                                        height={puppie.photo.data.attributes.height}
                                    />
                                )
                            })
                        }
                    </div>
                </>
            </Layout>
        )
}

export default OurPuppies