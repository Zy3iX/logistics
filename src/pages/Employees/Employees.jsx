import { Table } from "antd";
import styles from "./Employees.module.css";

const Employees = () => {
  const dataSource = [
    {
      key: "1",
      role: "Менеджер",
      quantity: 32,
      date: "12.12.2012",
    },
    {
      key: "2",
      role: "Админ",
      quantity: 12,
      date: "12.12.2012",
    },
  ];

  const columns = [
    {
      title: "Роль",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Дата создания роли",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  return (
    <div>
      <Table
        className={styles.tableInfo}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default Employees;
