import { ReactComponent as Menu } from "../../../assets/VectorMenu.svg";

type UserProps = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  date: string;
  status: string;
};
const TableElement = ({
  organization,
  username,
  email,
  phoneNumber,
  date,
  status,
}: UserProps) => {
  return (
    <tbody>
      <tr>
        <td scope="row">{organization}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{date}</td>
        <td>
          <button>{status}</button>
        </td>
        <td>
          <Menu />
        </td>
      </tr>
    </tbody>
  );
};

export default TableElement;
