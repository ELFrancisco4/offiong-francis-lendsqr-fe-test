import "./App.css";
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/LoginPage";
import DashBoard from "./pages/dashboardPage/DashBoard";
import UserPage from "./pages/userPage/UserPage";
import UserDetails from "./pages/detailsPage/UserDetails";
import Error404 from "./pages/error404/Error404";
const App = () => {
  return <div className="App">    
     <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/details" element={<UserDetails/>} />
        <Route path="*" element={<Error404 />} />
     </Routes>
  </div>;
};

export default App;
