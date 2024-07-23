import { Link } from "react-router-dom";
import styles from "./viewdriver.module.css";
import { useEffect, useState } from "react";

const ViewDriver = () => {
  const [driver, setDriver] = useState({});
  useEffect(() => {
    const driver = JSON.parse(localStorage.getItem("driver"));
    setDriver(driver);
    console.log(driver);
  }, []);

  return (
    <div className={styles.viewdriver}>
      <div className={styles.drivercard}>
        <h3 className={styles.drivername}>
          {driver.firstName} {driver.lastName}
        </h3>
        <h5>{driver.createdDate}</h5>
        <p>Телефон: {driver.telephone}</p>
        <p>Транспорт: {driver.transport}</p>
        <p style={driver.activated ? { color: "green" } : { color: "red" }}>
          Статус: {driver.activated ? "Активирован" : "Не активирован"}
        </p>
        <Link className={styles.backto} to={"/drivers"}>
          Вернуться к водителям
        </Link>
      </div>
    </div>
  );
};

export default ViewDriver;
