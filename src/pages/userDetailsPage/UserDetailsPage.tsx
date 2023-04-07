import Button from "../../components/Login/atoms/Button";
import BackButton from "../../components/UserDetails/atoms/BackButton";
import UserDetails from "../../components/UserDetails/molecules/UserDetails";
import UserPanel from "../../components/UserDetails/molecules/UserPanel";
import "../../styles/detailspage.scss";
import { useContext } from "react";
import { AppContext } from "../../context/globalContext";
import Error500 from "../error404/Error500";

export type DetailsProps = {
  data: any;
};

const UserDetailsPage = () => {
  const {errors, setErrors }=useContext(AppContext)

  return (
    <>
       { errors ? (<Error500/>): (
        <div className="details_container">
          <BackButton />
          <div className="details_container_title">
            <h1>User Details</h1>
            <span>
              <Button
                onClick={() => console.log("Active") }
                text="Blacklist User"
                className="blacklist"
              />
              <Button
                onClick={() => console.log("Active") }
                text="Activate User"
                className="activate"
              />
            </span>
          </div>
            <UserPanel />
            <UserDetails />
        </div>)}
  
    </>
  );
};

export default UserDetailsPage;
