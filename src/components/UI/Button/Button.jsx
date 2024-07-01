import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ clickHandler, className, children }) => {
  return (
    <button
      onClick={clickHandler}
      className={styles.Btn + " " + styles[className]}
    >
      {children}
    </button>
  );
};
export default Button;
