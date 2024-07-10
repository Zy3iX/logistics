import styles from "./Drivers.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Radio, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import DriversTable from "../../components/DriversTable/DriversTable";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/drivers")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setDrivers(res.data);
        } else {
          console.error("Полученные данные не являются массивом: ", res.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Ошибка ответа сервера:", error.response.data);
        } else if (error.request) {
          console.error("Ошибка запроса:", error.request);
        } else {
          console.error("Ошибка:", error.message);
        }
      });

  }, []);

  const options = [
    {
      label: "Все",
      value: "all",
      key: "all"
    },
    {
      label: "Новые",
      value: "new",
      key: "new"
    },
    {
      label: "Активные",
      value: "active",
      key: "active"
    },
  ];

  const handleAccept = () => {
    console.log("Accepted!");
  };

  return (
    <div>
      <div className={styles.radioDrivers}>
        <Radio.Group
          defaultValue={"all"}
          options={options}
          optionType="button"
          buttonStyle="solid"
          key={"radioGroup"}
        />

        <Link to={"/add-driver"} key={"linkAddDriver"}>
          <Button type={"primary"} className={styles.buttonDrivers}>
            <PlusOutlined />
            Добавить
          </Button>
        </Link>
      </div>

      <DriversTable onAccept={handleAccept} data={drivers} />
    </div>
  );
};

export default Drivers;
