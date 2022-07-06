import { useState } from 'react';
import { useDeviceDetect } from '../../helpers/universalFunctions';
import Footer from './Footer';
import Toolbar from './Toolbar';
import Dropdown from './Dropdown';

import classes from '../../styles/Layout.module.scss';

const Layout = (props) => {
    const { isMobile } = useDeviceDetect();
    const [displayDropdown, setDisplayDropdown] = useState(false)

    function dropDownDisplayHandler() {
        setDisplayDropdown(!displayDropdown)
    }

    return (
        <div className={classes.Layout}>      
            <Toolbar onClickHumBtn={() => dropDownDisplayHandler()}/>
            <Dropdown display={displayDropdown && isMobile}/>
            <div style={{display: displayDropdown ? 'block' : 'none'}} className={classes.Transparentlayer} onClick={() => {setDisplayDropdown(false)}}></div>
            <div className={classes.BackgroundPattern}></div>
            <main>
                
                {props.children}
                
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
