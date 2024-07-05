import { PlusOutlined } from "@ant-design/icons";
import UploadForm from "../../components/UploadForm/UploadForm";
import styles from "./Documents.module.css";
import { Button, Typography } from "antd";
import ButtonBlack from "../../components/ButtonBlack/ButtonBlack";

const { Title, Text } = Typography;

const Documents = () => {
  const data = [
    "Доставка отправления между адрестами",
    "Отслеживание",
    "Проверка содержимого при получении",
    "Доставка отправления между адрестами",
    "Отслеживание",
    "Проверка содержимого при получении",
    "Доставка отправления между адрестами",
    "Отслеживание",
    "Проверка содержимого при получении",
    "Доставка отправления между адрестами",
    "Отслеживание",
    "Проверка содержимого при получении",
    "Доставка отправления между адрестами",
    "Доба",
    "Отслеживание",
    "Проверка содержимого при получении",
  ];

  return (
    <div className={styles.documentGroup}>
      <div className={styles.documentGroup}>
        <div className={styles.addBtnTitleGroup}>
          <Title className={styles.documentTitle} level={1}>
            Документы
          </Title>
          <Button type={"primary"} className={styles.Btn}>
            <PlusOutlined /> Добавить
          </Button>
        </div>
        <Text className={styles.documentText}>
          Добавляйте необходимые документы для автомобиля
        </Text>

        <Title level={4}>Договор перевозки</Title>
      </div>

      <div className={styles.documents}>
        <div className={styles.documentInfo}>
          <div className={styles.documentTerms}>
            <Title level={4} className={styles.documentTermsTitle}>
              ДОГОВОР
            </Title>
            <Text>
              <ul>
                {data.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </Text>
            <ButtonBlack size={"large"}>
              Подписать ЭЦП и отправить на подписание
            </ButtonBlack>
          </div>
        </div>
        <div className={styles.attachDocument}>
          <UploadForm />

          <div className={styles.bottomRightButton}>
            <ButtonBlack size={"large"} className={styles.bottomRightButton}>
              Сохранить
            </ButtonBlack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
