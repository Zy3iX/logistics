import { Button, Form, Input, Typography } from "antd";
import styles from "./addDriver.module.css";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const AddDriver = () => {
  const navigate = useNavigate();

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
    console.log(values);
    try {
      const newDriver = {
        ...values,
        id: Math.random() + "_" + new Date().valueOf(),
        activated: false,
        createdDate: formatDate(new Date()),
      };
      console.log(newDriver);
      await axios.post("http://localhost:4000/api/drivers", newDriver);
      console.log("Водитель добавлен успешно!");
      navigate("/drivers  ");
    } catch (e) {
      console.log("Ошибка при создании водителя [форма]. Ошибка: ", e);
    }
  };

  return (
    <div className={styles.addDriverForm}>
      <Title level={3}>Добавить водителя</Title>
      <Form
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
          onClick={() => console.log("Добавлен новый водитель!")}
        >
          <PlusOutlined />
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default AddDriver;
