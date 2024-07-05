import { Radio } from "antd";
import styles from "./Drivers.module.css";
import DriversTable from "../../components/DriversTable/DriversTable";

const Drivers = () => {
  const options = [
    {
      label: "Все",
      value: "all",
    },
    {
      label: "Новый",
      value: "new",
    },
    {
      label: "Активные",
      value: "active",
    },
  ];

  const handleAccept = () => {
    console.log("Accepted!")
  }

  return (
    <div>
      <div className={styles.radioDrivers}>
        <Radio.Group
        defaultValue={"all"}
          options={options}
          optionType="button"
          buttonStyle="solid"
        />
      </div>

      <DriversTable onAccept={handleAccept} />
    </div>
  );
};

export default Drivers;
