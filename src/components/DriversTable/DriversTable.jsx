import { Table } from "antd";
import styles from "./driversTable.module.css"
import { columns } from "./data";

const DriversTable = ({onAccept}) => {
  return <Table className={styles.columns} columns={columns({onAccept})} onClick={(click) => {console.log(click)}} />;
};

export default DriversTable;
