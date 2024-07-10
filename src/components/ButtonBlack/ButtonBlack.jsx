import styles from "./ButtonBlack.module.css";
import { ConfigProvider, Button } from "antd";

const ButtonBlack = ({ size, children }) => {
  const theme = {
    token: {
      colorPrimary: "#000",
      colorText: "#fff",
      controlHeightLG: 48,
      borderColorHover: "#000",
    },
  };


  return (
    <div className={styles.btnContainer}>
      <ConfigProvider theme={theme}>
        <Button size={size} className={styles.documentsBtn} htmlType="submit">
          {children}
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default ButtonBlack;
