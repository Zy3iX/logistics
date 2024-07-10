import { Button, Radio, Table } from "antd";
import styles from "./allRequests.module.css";
import { columns } from "./data.jsx";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const AllRequests = () => {
  const options = [
    {
      label: "Активный",
      value: "active",
      key: "active",
    },
    {
      label: "Неактивный",
      value: "notactive",
      key: "notactive",
    },
  ];

  return (
    <div className={styles.tableRequests}>
      <div className={styles.btnGroup}>
        <Radio.Group
          className={styles.btnRadio}
          defaultValue={"active"}
          options={options}
          optionType="button"
          buttonStyle="solid"
        />
        <Button type="primary" className={styles.btnAdd}>
          <PlusOutlined /> Добавить
        </Button>
      </div>

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

export default AllRequests;
