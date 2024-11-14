import { MessagePropTypes } from "../proptypes/customPropTypes";
import styles from "./Message.module.css";

Message.propTypes = MessagePropTypes;

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
