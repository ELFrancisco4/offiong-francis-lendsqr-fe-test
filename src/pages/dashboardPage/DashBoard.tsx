import TableElement from "../../components/Dashboard/atoms/TableElement";
import UserMetric from "../../components/Dashboard/atoms/UserMetric";
import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
const DashBoard = () => {
  return (
    <div className="dashboard">
      <h1>Users</h1>
      <div className="dashboard_metrics">
        <UserMetric/>
        <UserMetric/>
        <UserMetric/>
        <UserMetric/>
      </div>
      <UserTable>
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
      </UserTable>
    </div>
  );
};

export default DashBoard;
