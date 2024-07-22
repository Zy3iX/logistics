import { Button, Form, Input, Typography } from "antd";
import styles from "./addDriver.module.css";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AddDriver = () => {

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear() % 100;

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (year < 10) {
      year = "0" + year;
    }

    return `${day}.${month}.${year}`;
  };

  const onFinish = async (values) => {
    const driver = { ...values }
   console.log("Данные водителя: ", {...driver, registrationDate: formatDate(new Date)})
  };

  return (
    <div className={styles.addDriverForm}>
      <Title level={3}>Добавить водителя</Title>
      <Form
      name={"addDriverFormControl"}
        layout="vertical"
        onFinish={onFinish}
        className={styles.driverFormControl}
      >
        <Form.Item
          label={"Имя"}
          name={"firstName"}
          rules={[
            {
              required: true,
              message: "Введите имя!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={"Фамилия"}
          name={"lastName"}
          rules={[
            {
              required: true,
              message: "Введите фамилию!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={"Отчество"}
          name={"middleName"}
          rules={[
            {
              required: true,
              message: "Введите отчество!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={"ИИН"}
          name={"iin"}
          rules={[
            {
              required: true,
              message: "Введите правильный ИИН!",
              pattern: /^\d{12}$/,
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={"Номер телефона"}
          name={"telephone"}
          rules={[
            {
              required: true,
              message: "Введите правильный номер телефона!",
              pattern: /^\+7\d{10}$/,
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={"Транспорт [ тип, марка ]"}
          name={"transport"}
          rules={[
            {
              required: true,
              message: "Введите транспорт!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          <PlusOutlined />
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default AddDriver;
