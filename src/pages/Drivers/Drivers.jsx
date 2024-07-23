import styles from "./Drivers.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Radio, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DriversTable from "../../components/DriversTable/DriversTable";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const driver = {
      firstName: "Василий",
      middleName: "Брежников",
      lastName: "Держинский",
      iin: "123456789123",
      id: "9_1721731378822",
      key: "9_1721731378822_key",
      createdDate: "23.07.24",
      activated: false,
      telephone: "+77077531956",
      transport: "Volvo Truck",
    };

    localStorage.setItem("driver", JSON.stringify(driver));
    const driverLocalStorage = JSON.parse(localStorage.getItem("driver"));
    setDrivers([driverLocalStorage]);
    console.log(driverLocalStorage);
  }, []);

  const options = [
    {
      label: "Все",
      value: "all",
      key: "all",
    },
    {
      label: "Новые",
      value: "new",
      key: "new",
    },
    {
      label: "Активные",
      value: "active",
      key: "active",
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
