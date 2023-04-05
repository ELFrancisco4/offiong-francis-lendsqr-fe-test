import TableElement from "../../components/Dashboard/atoms/TableElement";
import UserMetric from "../../components/Dashboard/atoms/UserMetric";
import Pagination from "../../components/Dashboard/molecules/Pagination";
import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
import { UserContext } from "../../context/globalContext";
import { useContext } from "react";
import { Loading } from "../../components/UserDetails/atoms/Loading";
const DashBoard = () => {
  const { data, currentData, isLoading, dataPerPage, setCurrentPage } =
    useContext(UserContext);

  console.log(currentData);
  console.log(isLoading);

  const paginate = (pageNumber: number): number => setCurrentPage(pageNumber);
  return (
    <div className="dashboard">
      <h1>Users</h1>
      <div className="dashboard_metrics">
        <UserMetric />
        <UserMetric />
        <UserMetric />
        <UserMetric />
      </div>
      <UserTable>
        {isLoading ? (
          <tbody>
            <Loading />
          </tbody>
        ) : (
          currentData.map((user: any) => {
            return (
              <TableElement
                key={user.id}
                date={user.date}
                email={user.email}
                username={user.userName}
                organization={user.orgName}
                phoneNumber={user.phoneNumber}
                status="Active"
              />
            );
          })
        )}
      </UserTable>

      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DashBoard;
