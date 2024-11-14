import { ButtonPropTypes } from "../proptypes/customPropTypes";
import styles from "./Button.module.css";

Button.propTypes = ButtonPropTypes;

function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
