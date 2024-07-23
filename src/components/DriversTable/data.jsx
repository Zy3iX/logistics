import { Button } from "antd";
import { Link } from "react-router-dom";

export const columns = () => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Дата регистрации",
    dataIndex: "createdDate",
    key: "createdDate",
  },
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Фамилия",
    dataIndex: "lastName",
    key: "secondName",
  },
  {
    title: "Отчество",
    dataIndex: "middleName",
    key: "middleName",
  },
  {
    title: "Телефон",
    dataIndex: "telephone",
    key: "telephone",
  },
  {
    title: "ИИН",
    dataIndex: "iin",
    key: "iin",
  },

  {
    title: "Транспорт",
    dataIndex: "transport",
    key: "transport",
  },
  {
    title: "Статус",
    dataIndex: "activated",
    render: (activated) => <p>{activated ? "Активный" : "Неактивный"}</p>,
    key: "status",
  },

  {
    title: "Действия",
    key: "actions",
    render: (text, record) => (
      <span>
        {!record.activated && (
          <Button type="primary" style={{ marginRight: "10px" }}>
            + Принять
          </Button>
        )}
        {!record.activated && <Button>Отклонить</Button>}
        <Link to={`/drivers/${record.id}`}>
          <Button>Посмотреть</Button>
        </Link>
      </span>
    ),
  },
];
