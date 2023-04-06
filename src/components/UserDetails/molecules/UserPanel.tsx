import "../styles/details.scss";
import { ReactComponent as EmptyStar } from "../../../assets/VectorEmptyStar.svg";
import { ReactComponent as FilledStar } from "../../../assets/VectorFilledStar.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "../../../context/globalContext";

const UserPanel = () => {
  const data: any = useContext(DetailsContext);
  const {profile, userName, accountBalance, accountNumber } = data
  return (
    <div className="user_panel">
      <div className="user_panel_container">
        <div className="user_panel_user">
          <div className="user_panel_user_avatar">
            <img src={profile? profile.avatar: null} alt="User Profile Picture" />
          </div>

          <div className="user_panel_user_account_name">
            <h2>{userName}</h2>
            <span>LSQFf587g90</span>
          </div>

          <div className="user_panel_user_tier">
            <p>User's tier</p>
            <span>
              <FilledStar />
              <EmptyStar />
              <EmptyStar />
            </span>
          </div>

          <div className="user_panel_user_account_balance">
            <h3>NGN {accountBalance}</h3>
            <p>{accountNumber}/Providus Bank</p>
          </div>
        </div>

        <nav>
          <Link to="#">General Details</Link>
          <Link to="#">Documents</Link>
          <Link to="#">Bank Details</Link>
          <Link to="#">Loans</Link>
          <Link to="#">Savings</Link>
          <Link to="#">App and System</Link>
        </nav>
      </div>
    </div>
  );
};

export default UserPanel;
