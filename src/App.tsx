import "./App.scss";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import DashBoard from "./pages/dashboardPage/DashBoard";
import UserPage from "./pages/userPage/UserPage";
import UserDetails from "./pages/detailsPage/UserDetails";
import Error404 from "./pages/error404/Error404";
import NavBar from "./components/NavBar/molecules/NavBar";
import SidePanel from "./components/SidePanel/molecules/SidePanel";
const App = () => {
  const DashboardLayout = (): JSX.Element => {
    return (
      <div className="App">
        <NavBar />
        <div className="App_content">
          <SidePanel />
          <Outlet />
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
          path: "/dashboard/user",
          element: <UserPage />,
        },
        {
          path: "/dashboard/details",
          element: <UserDetails />,
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
