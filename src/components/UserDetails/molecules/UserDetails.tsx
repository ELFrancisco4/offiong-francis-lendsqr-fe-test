import "../styles/details.scss";
import React from "react";
import Table from "./Table";
import axios from "axios";

const UserDetails = () => {
  const [data, setData] = React.useState<any>({})
  
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1"
      );
     setData(result.data)
     console.log(data)
     
    };

    fetchData();
  });
  const columns = React.useMemo(
    () => [
      {
        Header: "Personal Information",
        columns: [
          {
            Header: "Full name",
            accessor: "firstName lastName",
          },
          {
            Header: "Phone number",
            accessor: "phoneNumber",
          },
          {
            Header: "Email Address",
            accessor: "email",
          },

          {
            Header: "BVN",
            accessor: "bvn",
          },

          {
            Header: "Gender",
            accessor: "gender",
          },

          {
            Header: "Address",
            accessor: "address",
          },
        ],
      },

      {
        Header: "Education and Employment",
        columns: [
          {
            Header: "Level of Education",
            accessor: "level",
          },
          {
            Header: "Employment Status",
            accessor: "employmentStatus",
          },
          {
            Header: "Sector of Employment",
            accessor: "sector",
          },
          {
            Header: "Duration of Employment",
            accessor: "duration",
          },
          {
            Header: "Office Email",
            accessor: "officeEmail",
          },
          {
            Header: "Monthly Income",
            accessor: "monthlyIncome",
          },
        ],
      },
      {
        Header: "Socials",
        columns: [
          {
            Header: "TWITTER",
            accessor: "twitter",
          },
          {
            Header: "FACEBOOK",
            accessor: "facebook",
          },
          {
            Header: "INSTAGRAM",
            accessor: "instagram",
          },
        ],
      },
      {
        Header: "Guarantor",
        columns: [
          {
            Header: "Full Name",
            accessor: "firstName lastName",
          },
          {
            Header: "Phone Number",
            accessor: "phoneNumber",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
          {
            Header: "Address",
            accessor: "address",
          },
        ],
      },
    ],
    []
  );

  let dataArray = [data]

  return (
    <div className="user_details">
      <Table columns={columns} data={dataArray} />
    </div>
  );
};

export default UserDetails;
