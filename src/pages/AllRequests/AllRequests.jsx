import React, { useState, useEffect } from 'react';
import { Button, Radio, Table } from "antd";
import styles from "./AllRequests.module.css";
import { columns } from "./data.jsx";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import backend from '../../apiUrl.json';
import axios from 'axios';

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

  const [data, setData] = useState(null);
  const [prevData, setPrevData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${backend.apiUrl}/AllRequests`);
            const newData = response.data;

            if (JSON.stringify(newData) !== JSON.stringify(prevData)) {
                setData(newData);
                setPrevData(newData);
            }
        } catch (error) {
            console.error('Ошибка при запросе данных:', error);
        }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [prevData]);

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

        <Link to={"/new-request"}>
          <Button type="primary" className={styles.btnAdd} >
            <PlusOutlined /> Добавить
          </Button>
        </Link>

      </div>

      <Table
        columns={[
          ...columns,
          {
            title: "Действия",
            key: "actions",
            render: (text, data) => <Link to={`/request/${data.id}`}>Посмотреть</Link>,
          },
        ]}
        dataSource={data}
        loading={loading}
        scroll={{ x: 1500 }}
      />
    </div >
  );
};

export default AllRequests;
