/* eslint-disable react/prop-types */
import styles from "./InputAuth.module.css";
import { Input } from "antd";

const InputAuth = (props) => {
  return (
    <Input
      className={props.style + " " + styles.InputAuth}
      placeholder={props.placeholder}
      type={props.type}
      showCount={props.showCount}
      name={props.name}
      required={props.required}
      value={props.value}
    />
  );
};

export default InputAuth;
