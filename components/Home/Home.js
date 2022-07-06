import { useT } from "../../context/LanguageContext";
import { useDeviceDetect } from '../../helpers/universalFunctions';
import Layout from '../Layout/Layout'
import MainImage from '../Home/MainImage'

import classes from '../../styles/Index.module.scss'

const Home = () => {
    const { isMobile } = useDeviceDetect();
    const t = useT();
    if (isMobile) {
      return(
        <Layout>
            <MainImage />
            <h2>{t?.title_home}</h2>
            <p>{t?.favoriteMeal_home}</p>
            <p>{t?.homeland_home}</p>
            <p>{t?.structure_home}</p>
            <p>{t?.family_home}</p>
        </Layout>
      )
    }else{
      return(
        <Layout>
            <div className={classes.MainContentWrapper}>
            <div className={classes.MainContent}>
                <MainImage />
            </div>
            <div className={classes.MainContent}>
                <h2>{t?.title_home}</h2>
                <p className={classes.DefaultFontSizePc}>{t?.favoriteMeal_home}</p>
                <p className={classes.DefaultFontSizePc}>{t?.homeland_home}</p>
                <p className={classes.DefaultFontSizePc}>{t?.structure_home}</p>
                <p className={classes.DefaultFontSizePc}>{t?.family_home}</p>
            </div>
            </div> 
        </Layout>
      )
    }
  }

  export default Home