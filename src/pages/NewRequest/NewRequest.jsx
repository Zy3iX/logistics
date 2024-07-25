import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './NewRequest.module.css';
import { useNavigate } from "react-router-dom";
import backend from '../../apiUrl.json';
import axios from 'axios';

const NewRequest = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        axios.post(`${backend.apiUrl}/AllRequests`, values)
        console.log('Success:', values);
        navigate("/");
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                className={styles.row}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className={styles.columnOne}>
                    <h1>Новая заявка</h1>
                    <p>Заполните поля, чтобы добавить новую заявку</p>
                    <Form.Item
                        name="ID"
                    >
                        <Input placeholder="ID" disabled={true} />
                    </Form.Item>
                    <Form.Item
                        name="loadOnDate"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='date' placeholder="Выбрать даты планируемой погрузки" />
                    </Form.Item>
                    <Form.Item
                        name="loadOffDate"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='date' placeholder="Выбрать даты планируемой выгрузки" />
                    </Form.Item>
                    <span className={styles.flexRow}>
                        <Form.Item
                            name="orderPrice"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input type='tel' maxLength={14} placeholder="Цена" />
                        </Form.Item>
                        <Form.Item>
                            <Select
                                placeholder="Валюта"
                                name="orderCurrenncy"
                            >
                                <Option value="tg">Тенге</Option>
                                <Option value="rub">Рублей</Option>
                            </Select>
                        </Form.Item>
                    </span>
                    <Form.Item>
                        <Select
                            placeholder="Вид транспорта"
                            name="vehicleType"
                        >
                            <Option value="truck">Грузовик с прицепом</Option>
                            <Option value="gazel">ГазЕЛЬ</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            placeholder="Тип заявки"
                            name="applicationType"
                        >
                            <Option value="type1">Тип 1</Option>
                            <Option value="type2">Тип 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            placeholder="Условия оплаты"
                            name="paymentConditions"
                        >
                            <Option value="condition1">Условие 1</Option>
                            <Option value="condition2">Условие 2</Option>
                        </Select>
                    </Form.Item>
                    <h4>Грузоотправитель:</h4>
                    <Form.Item
                        name="senderName"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Наименование грузоотправителя" />
                    </Form.Item>
                    <h4>Контактное лицо при погрузке:</h4>
                    <Form.Item
                        name="senderFullName"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="ФИО" />
                    </Form.Item>
                    <Form.Item
                        name="senderPhoneNubmer"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='tel' maxLength={14} placeholder="Номер" />
                    </Form.Item>
                    <h4>Грузополучатель:</h4>
                    <Form.Item
                        name="receiverName"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Наименование грузополучателя" />
                    </Form.Item>
                    <h4>Контактное лицо при погрузке:</h4>
                    <Form.Item
                        name="receiverFullName"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="ФИО" />
                    </Form.Item>
                    <Form.Item
                        name="receiverPhoneNubmer"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='tel' maxLength={14} placeholder="Номер" />
                    </Form.Item>
                    <h3>Характеристика груза:</h3>
                    <Form.Item>
                        <Select
                            placeholder="Тип перевозки"
                            name="transportationType1"
                        >
                            <Option value="condition1">Условие 1</Option>
                            <Option value="condition2">Условие 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            placeholder="Вид перевозки"
                            name="transportationType2"
                        >
                            <Option value="condition1">Условие 1</Option>
                            <Option value="condition2">Условие 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="cargoName"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Наименование груза" />
                    </Form.Item>
                    <Form.Item
                        name="cargoWeight"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='nubmer' placeholder="Масса груза, т" />
                    </Form.Item>
                    <Form.Item
                        name="cargoVolume"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input type='number' placeholder="Объем груза, м^3" />
                    </Form.Item>
                    <Form.Item>
                        <Select
                            placeholder="Вид упаковки"
                            name="packageType"
                        >
                            <Option value="condition1">Условие 1</Option>
                            <Option value="condition2">Условие 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="capacity"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Количество мест" />
                    </Form.Item>
                    <Form.Item
                        name="seatVolume"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Габариты одного места, 12х24х54" />
                    </Form.Item>
                    <span className={styles.flexRow}>
                        <Form.Item
                            name="cargoPrice"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Объявленная стоимость груза" />
                        </Form.Item>
                        <Form.Item>
                            <Select
                                placeholder="Валюта"
                                name="cargoCurrency"
                            >
                                <Option value="tg">Тенге</Option>
                                <Option value="rub">Рублей</Option>
                            </Select>
                        </Form.Item>
                    </span>
                    <Form.Item>
                        <Select
                            placeholder="Способ погрузки"
                            name="loadOnType"
                        >
                            <Option value="condition1">Условие 1</Option>
                            <Option value="condition2">Условие 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="features"
                        rules={[
                            {
                                required: true,
                                message: 'Заполните поле!',
                            },
                        ]}
                    >
                        <Input placeholder="Особые условия перевозки" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </Form.Item>
                </div>
                <div className={styles.columnTwo}>
                    <h4>Подробный маршрут:</h4>
                    <div>
                        <Form.Item
                            name="route1"
                        >
                            <span className={styles.flexRow}>
                                <h4>Точка маршрута 1:</h4>
                                <Select
                                    style={{ maxWidth: "200px" }}
                                    placeholder="Выберите тип"
                                >
                                    <Option value="condition1">Условие 1</Option>
                                    <Option value="condition2">Условие 2</Option>
                                </Select>
                            </span>
                        </Form.Item>
                        <Form.Item
                            name="city1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Выберите город с карты" />
                        </Form.Item>
                        <Form.Item
                            name="adress1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Адрес" />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="route2"
                        >
                            <span className={styles.flexRow}>
                                <h4>Точка маршрута 2:</h4>
                                <Select
                                    style={{ maxWidth: "200px" }}
                                    placeholder="Выберите тип"
                                >
                                    <Option value="condition1">Условие 1</Option>
                                    <Option value="condition2">Условие 2</Option>
                                </Select>
                            </span>
                        </Form.Item>
                        <Form.Item
                            name="city2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Выберите город с карты" />
                        </Form.Item>
                        <Form.Item
                            name="adress2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Адрес" />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="route3"
                        >
                            <span className={styles.flexRow}>
                                <h4>Точка маршрута 3:</h4>
                                <Select
                                    style={{ maxWidth: "200px" }}
                                    placeholder="Выберите тип"
                                >
                                    <Option value="condition1">Условие 1</Option>
                                    <Option value="condition2">Условие 2</Option>
                                </Select>
                            </span>
                        </Form.Item>
                        <Form.Item
                            name="city3"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Выберите город с карты" />
                        </Form.Item>
                        <Form.Item
                            name="adress3"
                            rules={[
                                {
                                    required: true,
                                    message: 'Заполните поле!',
                                },
                            ]}
                        >
                            <Input placeholder="Адрес" />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
};
export default NewRequest;