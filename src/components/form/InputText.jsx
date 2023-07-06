import styles from "./InputText.module.scss";
const InputText = (props) => {
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
  return (
    <div className={`${styles.inputForm} ${error ? styles.error : ""}`}>
      <label htmlFor={id}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          id={id}
          name={name}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
        />
        {error && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
};
export default InputText;
