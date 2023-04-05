import "./App.scss";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import DashBoard from "./pages/dashboardPage/DashBoard";
import { UserContext } from "./context/globalContext";
import axios from "axios";
import { useEffect, useState } from "react";
import Error404 from "./pages/error404/Error404";
import NavBar from "./components/NavBar/molecules/NavBar";
import SidePanel from "./components/SidePanel/molecules/SidePanel";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";
const App = () => {
  const [data, setData] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(9);

  useEffect(() => {
    const getUserDetailsFromApi = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setData([...result.data]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getUserDetailsFromApi();
  }, [data]);

  //Get current data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const DashboardLayout = (): JSX.Element => {
    return (
      <div className="App">
        <NavBar />
        <div className="App_content">
          <SidePanel />
          <UserContext.Provider
            value={{ currentData, data, dataPerPage, isLoading,  setCurrentPage }}
          >
            <Outlet />
          </UserContext.Provider>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/dashboard/data/:id",
          element: <UserDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
