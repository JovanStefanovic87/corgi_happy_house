import Link from 'next/link'
import { useT } from "../../context/LanguageContext";
import { useDeviceDetect } from '../../helpers/universalFunctions';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram';
import Layout from '../Layout/Layout'
import AboutCoverImage from '../About/AboutCoverImage'

import classes from '../../styles/About.module.scss';

const About = () => {
    const { isMobile } = useDeviceDetect();
    const t = useT();

    if (isMobile){
        return(
            <Layout >
                <AboutCoverImage />
                <div className={classes.AbotuTextContainerMob}>
                    <h2>{t?.about_nav}</h2>
                    <p>{t?.welcome}</p>
                    <p>{t?.location}</p>
                    <p>{t?.experience}</p>
                    <p>{t?.dogPeople}</p>
                </div>
                <div className={classes.AbotuTextContainerMob}>
                    <h2>{t?.title_contact}</h2>
                    <p><strong>E-mail: </strong><span className={classes.EmailText}>sabina-tikvicki@corgihappyhouse.com</span></p>
                        <div className={classes.SocialIconsContainer}>
                        <Link href='https://www.facebook.com/sabina.tikvicki.7'><a><AiFillFacebook className={classes.SocialIconFacebook}/></a></Link>
                        <Link href='https://www.instagram.com/corgihappyhouse/'><a><AiFillInstagram className={classes.SocialIconInstagram}/></a></Link>
                        </div>
                </div>
            </Layout>
        )
    }else{
        return(
            <Layout >
                <div className={classes.AboutPageWrapper}>
                    <div className={classes.AbotuTextContainer}>
                        <h2>{t?.about_nav}</h2>
                        <p className={classes.DefaultFontSizePc}>{t?.welcome}</p>
                        <p className={classes.DefaultFontSizePc}>{t?.location}</p>
                        <p className={classes.DefaultFontSizePc}>{t?.experience}</p>
                        <p className={classes.DefaultFontSizePc}>{t?.dogPeople}</p>
                    </div>
                    <AboutCoverImage />
                    <div className={classes.ContactTextContainer}>
                        <h2>{t?.title_contact}</h2>
                        <p className={classes.DefaultFontSizePc}><strong>E-mail: </strong><span className={classes.EmailText}>sabina-tikvicki@corgihappyhouse.com</span></p>
                        <div className={classes.SocialIconsContainer}>
                        <Link href='https://www.facebook.com/sabina.tikvicki.7'><a><AiFillFacebook className={classes.SocialIconFacebook}/></a></Link>
                        <Link href='https://www.instagram.com/corgihappyhouse/'><a><AiFillInstagram className={classes.SocialIconInstagram}/></a></Link>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About