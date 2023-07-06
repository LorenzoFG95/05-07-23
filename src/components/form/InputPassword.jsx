import { useState } from "react";
import styles from "./InputText.module.scss";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const InputPassword = (props) => {
  const {
    id,
    label,
    name,
    line,
    placeholder,
    disabled,
    icon,
    error,
    errorMessage,
    handleChange,
  } = props || null;

  const [isShow, setIsShow] = useState(false);

  const toggleShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={`${styles.inputForm} ${error ? styles.error : ""}`}>
      <label htmlFor={id}>
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type={isShow ? "text" : "password"}
            placeholder={placeholder}
            id={id}
            name={name}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
          />

          <div className={styles.icon} onClick={() => toggleShowPassword()}>
            {isShow ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        {error && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default InputPassword;
