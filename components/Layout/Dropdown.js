import Link from 'next/link'
import { useT } from "../../context/LanguageContext";
import { ImHome3 } from 'react-icons/im';

import classes from '../../styles/Layout.module.scss';


const Dropdown = props => {
    const t = useT();
    return (
        <ul style={{display: props.display ? 'block' : 'none'}} className={classes.Dropdown}>
            <Link href="/"><li><a><ImHome3 /></a></li></Link>
            <Link href="/about"><li><a>{t?.about_nav}</a></li></Link>
            <Link href="/our-dogs"><li><a>{t?.ourDogs_nav}</a></li></Link>
            <Link href="/our-puppies"><li><a>{t?.puppies_nav}</a></li></Link>
            <Link href="/gallery"><li><a>{t?.gallery_nav}</a></li></Link>
        </ul>
    )
}

export default Dropdown