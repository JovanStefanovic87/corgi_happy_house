import { useT } from "../../context/LanguageContext";
import Layout from '../Layout/Layout'
import Dogs from '../Dogs&Puppies/Dogs'

import classes from '../../styles/Dogs.module.scss'

const OurDogs = (props) => {
    const t = useT();
    
        return(
            <Layout>
                <>
                    <h2>{t?.ourDogs_nav}</h2>
                    <div className={classes.Gallery}>
                        {
                            props.ourDogsData.map((dog, i) => {
                                return(
                                    <Dogs 
                                        name={dog.name}
                                        img={`${process.env.LOCAL_DOMAIN}${dog.photo.data.attributes.url}`}
                                        fullName={dog?.fullName}
                                        dateOfBirth={dog.dateOfBirth}
                                        states={dog.states}
                                        medicalResults={dog.medicalResults}
                                        awards={dog.awards}
                                        index={i}
                                        key={i}
                                        width={dog.photo.data.attributes.width}
                                        height={dog.photo.data.attributes.height}
                                    />
                                )
                            })
                        }
                    </div>
                </>
            </Layout>
        )       
}

export default OurDogs