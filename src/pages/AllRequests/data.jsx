export const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Дата создания заявки",
    dataIndex: "createdDate",
  },
  {
    title: "Статус",
    dataIndex: "status",
  },
  {
    title: "Тип перевозки",
    dataIndex: "transportationType",
  },
  {
    title: "Вид транспорта",
    dataIndex: ["typeOfVehicle", "type"],
  },
  {
    title: "Планируемая дата загрузки - выгрузки",
  },
  {
    title: "Тип заявки",
    dataIndex: "applicationType",
  },
  {
    title: "Цена",
    dataIndex: "purchaseCost",
  },
  {
    title: "Валюта",
    dataIndex: "currencyType",
  },
  {
    title: "Маршрут",
    dataIndex: "addresses",
  },
  {
    title: "Груз",
    dataIndex: ["cargo", "name"],
  },
];
