import styles from "./InputCheckbox.module.scss";
import { useEffect, useState } from "react";
import { FaCheck, FaBan } from "react-icons/fa6";
const InputCheckbox = (props) => {
  const { checked } = props || null;
  const [isChecked, setIsChecked] = useState();
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);
  return (
    <label className={styles.InputCheckbox}>
      <input
        className={`${styles.input} ${isChecked && styles.active}`}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => toggleCheckbox()}
      />
      <span className={`${styles.checked} ${isChecked && styles.active}`}>
        <FaCheck />
      </span>
      <span className={`${styles.checked} ${!isChecked && styles.active}`}>
        <FaBan />
      </span>
    </label>
  );
};

export default InputCheckbox;
