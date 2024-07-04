import { MdOutlineEdit, MdOutlineDeleteForever } from "react-icons/md";
import { checkPermissions } from "../../helpers/checkPermission";
import { formatDate } from "../../helpers/dateFormat";
import { Flex, Popconfirm } from "antd";

export const formFieldsForwarder = [
  {
    name: "login",
    label: "Почта",
  },
  {
    name: "firstName",
    label: "Имя",
  },
  {
    name: "lastName",
    label: "Фамилия",
  },
  {
    name: "middleName",
    label: "Отчество",
  },
  {
    name: "dr",
    label: "Дата рождения ",
  },
  {
    name: "telephone",
    label: "Номер телефона",
  },
  {
    name: "organizationName",
    label: "Наименование организации",
  },
  {
    name: "bin",
    label: "БИН компании",
  },
  {
    name: "bik",
    label: "БИК банка",
  },
  {
    name: "checkingAccount",
    label: "Расчетные счета",
  },
  {
    name: "actualAddress",
    label: "Фактический адрес",
  },
  {
    name: "legalAddress",
    label: "Юридический адрес",
  },
  {
    name: "umlAddress",
    label: "UML адрес",
  },
  {
    name: ["signatory", "positionSignatory"],
    label: "Должность подписанта",
  },
  {
    name: ["signatory", "firstName"],
    label: "Имя подписанта",
  },
  {
    name: ["signatory", "lastName"],
    label: "Фамилия подписанта",
  },
  {
    name: ["signatory", "middleName"],
    label: "Отчество подписанта",
  },
  {
    name: ["signatory", "head"],
    label: "1-ый руководитель",
  },
  {
    name: "password",
    label: "Новый пароль",
  },
];

export const formFieldsSB = [
  {
    name: "firstName",
    label: "Имя",
  },
  {
    name: "lastName",
    label: "Фамилия",
  },
  {
    name: "middleName",
    label: "Отчество",
  },
  {
    name: "iin",
    label: "ИИН",
  },
  {
    name: "email",
    label: "Почта",
  },
  {
    name: "password",
    label: "Новый пароль",
  },
];

export const columns = ({ onClick, handleEdit }) => [
  {
    title: "ФИО",
    dataIndex: "firstName",
  },
  {
    title: "Почта",
    dataIndex: "email",
  },
  {
    title: "ИИН",
    dataIndex: "iin",
  },
  {
    title: "Дата регистрации",
    dataIndex: "createdDate",
    render: (createdDate) => {
      return formatDate(createdDate);
    },
  },
  {
    title: "Роль",
    dataIndex: "role",
    render: (role) => {
      if (role === "ROLE_CB") return <span>Служба безопасности</span>;
      if (role === "ROLE_FORWARDER") return <span>Экспедитор</span>;
    },
  },
  {
    title: "Действия",
    render: (record) =>
      checkPermissions(["ROLE_ADMIN"]) ? (
        <Flex gap={30}>
          <MdOutlineEdit
            style={{ fontSize: "20px", color: "#2680e6" }}
            onClick={() => handleEdit(record)}
          />

          <Popconfirm
            title="Вы уверены, что хотите удалить этого сотрудника?"
            onConfirm={() => onClick(record.id)}
            okText="Да"
            cancelText="Нет"
          >
            <MdOutlineDeleteForever
              style={{ fontSize: "20px", color: "#f96262" }}
            />
          </Popconfirm>
        </Flex>
      ) : null,
  },
];
