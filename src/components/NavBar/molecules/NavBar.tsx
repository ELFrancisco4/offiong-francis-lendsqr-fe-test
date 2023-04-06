import Logo from "../../Login/atoms/Logo";
import SearchField from "../atoms/SearchField";
import "../styles/nav.scss";
import { AiOutlineBell } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = () => {
    console.log(searchValue);
  };
  return (
    <nav className="navigation">
      <Logo />
      <SearchField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        searchValue={searchValue}
      />

      <ul>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <AiOutlineBell />
        </li>
        <li>
          <img
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
            alt="Profile picture"
          />
        </li>
        <li>
          <span className="dropdown">
            <p>Adedeji</p>
            <IoMdArrowDropdown />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
