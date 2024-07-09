import { Table } from "antd";
import styles from "./driversTable.module.css";
import { columns } from "./data";

const DriversTable = ({ onAccept, data }) => {
  return (
    <Table
      className={styles.columns}
      dataSource={data}
      columns={columns({ onAccept })}
      onClick={(click) => {
        console.log(click);
      }}
      scroll={{ x: 1500 }}
    />
  );
};

export default DriversTable;
