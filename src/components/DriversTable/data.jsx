export const columns = () => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Дата регистрации",
    dataIndex: "createdDate",

  },
  {
    title: "Имя",
    dataIndex: "firstName",
  },
  {
    title: "Фамилия",
    dataIndex: "lastName",
  },
  {
    title: "Отчество",
    dataIndex: "middleName",
  },
  {
    title: "Телефон",
    dataIndex: "telephone",
  },
  {
    title: "ИИН",
    dataIndex: "iin",
  },

  {
    title: "Транспорт",
    dataIndex: "transport",
  },
  {
    title: "Статус",
    dataIndex: "activated",
    render: (activated) => <p>{activated ? "Активный" : "Неактивный"}</p>,
  },
];
