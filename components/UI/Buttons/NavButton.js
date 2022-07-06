import Link from 'next/link'
import classes from '../../../styles/Buttons.module.scss';

const NavButton = props => {
    return(
        <Link href={props.href}>
            <button type='button' onClick={props.onClick} href={props.href} className={classes.NavButton}>
                <a>{props.value}</a>
            </button>
        </Link>
    )
}

export default NavButton