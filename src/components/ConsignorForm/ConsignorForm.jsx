import UploadForm from "../UploadForm/UploadForm";
import styles from "./consignorForm.module.css";
import { Form, Input, Typography } from "antd";

const { Title } = Typography;

const ConsignorForm = () => {
  return (
    <div className={styles.consignorForm}>
      <div className={styles.consignorFormFH}>
        <Form.Item
          name={"name"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ФИО!",
            },
          ]}
        >
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"ФИО"}
          />
        </Form.Item>
        <Form.Item
          name={"dateBirth"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите дату рождения!",
            },
          ]}
        >
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"Дата рождения"}
          />
        </Form.Item>
        <Form.Item
          name={"phoneNumber"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите номер телефона!",
            },
          ]}
        >
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"Номер телефона"}
          />
        </Form.Item>
        <Form.Item
          name={"organization"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите название организации!",
            },
          ]}
        >
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"Наименование организации"}
          />
        </Form.Item>
        <Form.Item
          name={"bin"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите БИН компании!",
            },
          ]}
        >
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"БИН компании"}
          />
        </Form.Item>
        <Form.Item
          name={"bik"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите БИК банка!",
            },
          ]}
        >
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"БИК банка"}
          />
        </Form.Item>
        <Form.Item
          name={"paymentAccount"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите расчетные счета!",
            },
          ]}
        >
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"Расчетные счета"}
          />
        </Form.Item>
        <Form.Item
          name={"oldPassword"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите старый пароль!",
            },
          ]}
        >
          <Input.Password
            showCount={true}
            allowClear
            className={styles.formInput}
            placeholder={"Старый пароль"}
          />
        </Form.Item>
        <Form.Item
          name={"newPassword"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите новый пароль!",
            },
          ]}
        >
          <Input.Password
            showCount={true}
            allowClear
            className={styles.formInput}
            placeholder={"Новый пароль"}
          />
        </Form.Item>
      </div>
      <div className={styles.ConsignorFormSH}>
        {/* this abbreviation stands for  ConsignorFormSecondHalf and ConsignorFormFirstHalf  */}
        <Title level={3}>Адреса: </Title>
        <Form.Item name={"actualAddress"}>
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"Фактический адрес"}
          />
        </Form.Item>
        <Form.Item name={"legalAddress"}>
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"Юридический адрес"}
          />
        </Form.Item>
        <Form.Item name={"umlAddress"}>
          <Input
            allowClear
            required={true}
            className={styles.formInput}
            placeholder={"UML адрес"}
          />
        </Form.Item>
        <Form.Item name={"signatoryJob"}>
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"Должность подписанта"}
          />
        </Form.Item>
        <Form.Item name={"signatoryName"}>
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"ФИО подписанта"}
          />
        </Form.Item>
        <Form.Item name={"firstManager"}>
          <Input
            allowClear
            className={styles.formInput}
            placeholder={"1-ый руководитель"}
          />
        </Form.Item>
        <Title level={3}>Документы</Title>
        <Form.Item>
          <Title level={4}>Устав</Title>
          <UploadForm />
        </Form.Item>
        <Form.Item>
          <Title level={4}>Свидетельство о постановке на НДС</Title>
          <UploadForm />
        </Form.Item>
        <Form.Item>
          <Title level={4}>Доверенность/Основание на подписанта</Title>
          <UploadForm />
        </Form.Item>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ConsignorForm;
