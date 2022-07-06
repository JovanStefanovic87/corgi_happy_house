import Link from 'next/link'
import classes from '../../../styles/Buttons.module.scss';

const FooterNavButton = props => {
    return(
        <>
            <button className={classes.FooterNavButton} type='button'>
                <Link href={props.href}><a>{props.children}</a></Link>
            </button>|
        </>
    )
}

export default FooterNavButton