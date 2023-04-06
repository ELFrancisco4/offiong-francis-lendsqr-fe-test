import { useNavigate } from "react-router-dom";
import "../../styles/error404.scss";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error_page">
      <h1>404</h1>
      <h1>ERROR</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
};

export default Error404;
