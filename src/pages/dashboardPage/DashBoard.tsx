import TableElement from "../../components/Dashboard/atoms/TableElement";
import UserMetric from "../../components/Dashboard/atoms/UserMetric";
import Pagination from "../../components/Dashboard/molecules/Pagination";
import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
import { UserContext } from "../../context/globalContext";
import { useContext } from "react";
import { Loading } from "../../components/UserDetails/atoms/Loading";
import { HiUsers } from "react-icons/hi";
import { MdGroups3 } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { ReactComponent as LoanRecord } from "../../assets/VectorLoanRecord.svg";
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
        <UserMetric metric={500} text="Users">
          <span>
            <HiUsers />
          </span>
        </UserMetric>

        <UserMetric metric={200} text="Active Users">
          <span>
            <MdGroups3 />
          </span>
        </UserMetric>
        <UserMetric metric={300} text="Users with Loans">
          <span>
            <LoanRecord />
          </span>
        </UserMetric>
        <UserMetric text="Users with Savings" metric={350}>
          <span>
            <FaCoins/>
          </span>
        </UserMetric>
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
