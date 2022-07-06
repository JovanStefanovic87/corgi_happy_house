import Link from 'next/link'
import { useT } from "../../context/LanguageContext";
import { useDeviceDetect } from '../../helpers/universalFunctions';
import { ImHome3 } from 'react-icons/im';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram';
import FooterNavButton from '../UI/Buttons/FooterNavButton'
import Distancer from '../UI/Distancer'

import classes from '../../styles/Layout.module.scss';

const Footer = () => {
    const { isMobile } = useDeviceDetect();
    const t = useT();
    return(
        <footer className={isMobile ? "" : classes.FooterPc}>
            <div className={classes.FlexRowContainer}>
                <div className={classes.FooterNavButtonsGroup}>|
                    <FooterNavButton href="/"><ImHome3 /></FooterNavButton>
                    <FooterNavButton href="/about">{t?.about_nav}</FooterNavButton>
                    <FooterNavButton href="/our-dogs">{t?.ourDogs_nav}</FooterNavButton>
                    <FooterNavButton href="/our-puppies">{t?.puppies_nav}</FooterNavButton>
                    <FooterNavButton href="/gallery">{t?.gallery_nav}</FooterNavButton>
                </div>
                <Distancer />
                <Link href='https://www.instagram.com/corgihappyhouse/'><a><AiFillInstagram className={classes.SocialIcon} /></a></Link>
                <Link href='https://www.facebook.com/sabina.tikvicki.7'><a><AiFillFacebook className={classes.SocialIcon}/></a></Link>
            </div>
            
            <p className={classes.CopyRight}>Corgi Happy House © 2022 </p>
        </footer>
    )
}

export default Footer