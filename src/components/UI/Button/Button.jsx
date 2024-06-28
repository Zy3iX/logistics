import styles from "./Button.module.css";

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
