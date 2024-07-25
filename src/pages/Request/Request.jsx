import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Spin } from "antd";
import backend from '../../apiUrl.json';
import { useParams } from 'react-router-dom';
import styles from "./Request.module.css";
import { DateTime } from 'luxon';

const Request = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const locale = 'ru';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend.apiUrl}/AllRequests/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  let createDate = 'Invalid date';
  if (data && data.createdAt) {
    try {
      const parsedDate = DateTime.fromFormat(data.createdAt, 'ddMMyyyy', { locale });
      if (parsedDate.isValid) {
        createDate = parsedDate.toFormat("d MMMM yyyy");
      }
    } catch (e) {
      console.error("Error parsing date:", e);
    }
  }

  let loadOnData = 'Invalid date';
  if (data && data.loadOnDate) {
    try {
      const parsedDate = DateTime.fromFormat(data.loadOnDate, 'ddMMyyyy', { locale });
      if (parsedDate.isValid) {
        loadOnData = parsedDate.toFormat("d MMMM yyyy");
      }
    } catch (e) {
      console.error("Error parsing date:", e);
    }
  }

  let loadOffData = 'Invalid date';
  if (data && data.loadOffDate) {
    try {
      const parsedDate = DateTime.fromFormat(data.loadOffDate, 'ddMMyyyy', { locale });
      if (parsedDate.isValid) {
        loadOffData = parsedDate.toFormat("d MMMM yyyy");
      }
    } catch (e) {
      console.error("Error parsing date:", e);
    }
  }

  if (loading) return <div className={styles.spinningDiv}><Spin className={styles.spinning}></Spin></div>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className={styles.container}>
      <div className={styles.columnLeft}>
        <h1>Заявка #{data.id}</h1>
        <div className={styles.idfield}><strong>ID Заказа:</strong> {data.id}</div>
        <div className={styles.field}><strong>Дата создания:</strong> {createDate}</div>
        <div className={styles.field}><strong>Статус:</strong> {data.status}</div>
        <h2>Основные данные</h2>
        <div className={styles.field}><strong>Дата планируемой погрузки:</strong> {loadOnData}</div>
        <div className={styles.field}><strong>Дата планируемой выгрузки:</strong> {loadOffData}</div>
        <div className={styles.field}><strong>Тип заявки:</strong> {data.applicationType}</div>
        <div className={styles.row}>
          <div className={styles.field}><strong>Цена:</strong> {data.orderPrice}</div>
          <div className={styles.field}><strong>Валюта:</strong> {data.orderCurrency}</div>
        </div>
        <div className={styles.field}><strong>Условия оплаты:</strong> {data.paymentConditions}</div>
        <h2>Грузоотправитель</h2>
        <div className={styles.field}><strong>Наименование грузоотправителя:</strong> {data.senderName}</div>
        <div className={styles.field}><strong>ФИО:</strong> {data.senderFullname}</div>
        <div className={styles.field}><strong>Номер:</strong> {data.senderPhoneNumber}</div>
        <h2>Грузополучатель</h2>
        <div className={styles.field}><strong>Наименование грузополучателя:</strong> {data.receiverName}</div>
        <div className={styles.field}><strong>ФИО:</strong> {data.receiverFullName}</div>
        <div className={styles.field}><strong>Номер:</strong> {data.receiverPhoneNumber}</div>
        <h2>Характеристики груза</h2>
        <div className={styles.field}><strong>Тип перевозки:</strong> {data.transportationType1}</div>
        <div className={styles.field}><strong>Вид перевозки:</strong> {data.transportationType2}</div>
        <div className={styles.field}><strong>Наименование груза:</strong> {data.cargoName}</div>
        <div className={styles.field}><strong>Масса груза, т:</strong> {data.cargoWeight}</div>
        <div className={styles.field}><strong>Объем груза, м^3:</strong> {data.cargoVolume}</div>
        <div className={styles.row}>
          <div className={styles.field}><strong>Объявленная стоимость груза:</strong> {data.cargoPrice}</div>
          <div className={styles.field}><strong>Валюта:</strong> {data.cargoCurrency}</div>
        </div>
      </div>
      <div className={styles.columnRight}>
        <h2>Характеристики грузового транспорта</h2>
        <div className={styles.field}><strong>Вид транспорта:</strong> {data.vehicleType}</div>
        <div className={styles.field}><strong>Тип упаковки:</strong> {data.packageType}</div>
        <div className={styles.field}><strong>Количество мест:</strong> {data.capacity}</div>
        <div className={styles.field}><strong>Объем одного места:</strong> {data.seatVolume}</div>
        <div className={styles.field}><strong>Способ погрузки:</strong> {data.loadOnType}</div>
        <div className={styles.field}><strong>Особые условия:</strong> {data.features}</div>
        <h2>Маршрут</h2>
        <div className={styles.field}><strong>Тип назначения:</strong> {data.route1}</div>
        <div className={styles.field}><strong>Город:</strong> {data.city1}</div>
        <div className={styles.field}><strong>Адрес:</strong> {data.address1}</div>
        <div className={styles.field}><strong>Тип назначения:</strong> {data.route2}</div>
        <div className={styles.field}><strong>Город:</strong> {data.city2}</div>
        <div className={styles.field}><strong>Адрес:</strong> {data.address2}</div>
        <div className={styles.field}><strong>Тип назначения:</strong> {data.route3}</div>
        <div className={styles.field}><strong>Город:</strong> {data.city3}</div>
        <div className={styles.field}><strong>Адрес:</strong> {data.address3}</div>
      </div>
    </div>
  );
};

export default Request;