import styles from "./Drivers.module.css";
import { Link } from "react-router-dom";
import { Radio, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DriversTable from "../../components/DriversTable/DriversTable";

const Drivers = () => {
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

      <DriversTable onAccept={handleAccept} />
    </div>
  );
};

export default Drivers;
