import styles from "./Badge.module.scss";
import { FaXmark } from "react-icons/fa6";
const Badge = (props) => {
  const { close, fill } = props || null;
  return (
    <div className={`${styles.Badge} ${fill && styles.fill}`}>
      Badge {close && <FaXmark />}
    </div>
  );
};

export default Badge;
