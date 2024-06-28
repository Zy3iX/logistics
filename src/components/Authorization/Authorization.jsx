import Button from "../UI/Button/Button";
import InputAuth from "../UI/InputAuth/InputAuth";
import styles from "./Authorization.module.css";
import { RightOutlined } from "@ant-design/icons";

const Authorization = () => {
  return (
    <div className={styles.AuthWindow}>
      <div className={styles.LogoContainer}>
        <img
          className={styles.LogoAuth}
          src="../../../src/assets/images/Logo.svg"
          alt="Logo"
        />
      </div>
      <div className={styles.Form}>
        <form className={styles.FormControl}>
          <h4 className={styles.FormHeader}>Вход</h4>
          <p className={styles.FormPar}>С возвращением!</p>
          <InputAuth placeholder={"Введите почту"} />
          <InputAuth placeholder={"Пароль"} />
          <div className={styles.FormBtn}>
            <Button className={"BtnInfo"} >
              Войтиd
              <span>
                <RightOutlined className={styles.IconButton} />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
