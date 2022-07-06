import Link from 'next/link'
import classes from '../../../styles/Buttons.module.scss';

const NavButtonHomeDesktop = props => {
    return(
        <Link href={props.href}>
            <button type='button' onClick={props.onClick} className={classes.NavButton}>
                {props.children}
            </button>
        </Link>
    )
}

export default NavButtonHomeDesktop