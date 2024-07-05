import { Table } from "antd";
import styles from "./AllRequests.module.css";
import { columns } from "./data.jsx";
import { Link } from "react-router-dom";

const AllRequests = () => {
  return (
    <div className={styles.tableRequests}>
      <Table
        columns={[
          ...columns,
          {
            title: "Действия",
            key: "actions",
            render: () => <Link to={"/"}>Посмотреть</Link>,
          },
        ]}
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default AllRequests