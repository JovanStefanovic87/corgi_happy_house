import classes from '../../../styles/Buttons.module.scss';

const HamburgerButton = (props) => (
    <div
      className={classes.HamburgerButton}
      onClick={props.onClick}
      style={{ display: props.display}}
    >
      <div />
      <div />
      <div />
    </div>
  );
  
  export default HamburgerButton;
  