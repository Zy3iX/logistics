import {Button} from "antd"

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

  {
    title: "Действия",
    render: (text, record) =>
        <span>
          {!record.activated && (
            <Button
              type="primary"
              style={{ marginRight: "10px" }}
            >
              + Принять
            </Button>
          )}
          {!record.activated && <Button>Отклонить</Button>}
        </span>
  },
];
