import { useT } from "../../context/LanguageContext";
import { useDeviceDetect } from '../../helpers/universalFunctions';
import HamburgerButton from '../UI/Buttons/HamburgerButton';
import { ImHome3 } from 'react-icons/im';
import NavButton from '../UI/Buttons/NavButton';
import NavButtonHomeDesktop from '../UI/Buttons/NavButtonHomeDesktop';
import LanguageSelector from './LanguageSelector';

import classes from '../../styles/Layout.module.scss';

const Toolbar = props => {
    const { isMobile } = useDeviceDetect();
    const t = useT();
        return (
            <header className={classes.Header}>
                <HamburgerButton onClick={() => props.onClickHumBtn()} display={isMobile ? 'flex' : 'none'}/>
                <div className={classes.NavButtonGroup} style={{display: !isMobile ? 'flex' : 'none'}}>
                    <NavButtonHomeDesktop href='/'><a><ImHome3 /></a></NavButtonHomeDesktop>
                    <NavButton href='/about' value={t?.about_nav}/>
                    <NavButton href="/our-dogs" value={t?.ourDogs_nav}/>
                    <NavButton href='/our-puppies' value={t?.puppies_nav}/>
                    <NavButton href='/gallery' value={t?.gallery_nav}/>
                </div>
                <h1 className={classes.LogoTxt}>Corgi Happy House</h1>
                <LanguageSelector />
                {/* <div className={classes.LogoMob}>
                    <Logo width="160" height="40" />
                </div> */}
            </header>
        );
};

export default Toolbar;
