import "../styles/login.scss";
import Input from "../atoms/Input";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<"password" | "text">("password");
  const navigate = useNavigate();
  return (
    <form className="form">
      <div className="form_welcome">
        <h1>Welcome!</h1>
        <span>Enter details to login</span>
      </div>

      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        type="email"
        placeholder="Email"
        value={email}
      />
      <div className="form_password">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type={type}
          placeholder="Password"
          value={password}
        />
        <Button
          onClick={() =>
            type === "text" ? setType("password") : setType("text")
          }
          text="Show"
        />
      </div>
      <a href="#">FORGOT PASSWORD?</a>
      <Button
        className="login_button"
        onClick={() => {
          navigate("/dashboard");
        }}
        text="LOG IN"
      />
    </form>
  );
};

export default Form;
