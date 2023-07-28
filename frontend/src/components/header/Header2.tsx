import { useNavigate } from "react-router-dom";
import "../../css/header.css";
import HeaderBtn from "../header/HeaderBtn";

const Header2 = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header_container">
        <div className="logo" onClick={() => navigate("/")}>
          로고
        </div>
        <div className="header_menu">
          <HeaderBtn address={"/login"} text={"로그인"} />
          <HeaderBtn address={"/signup"} text={"회원가입"} />
          <HeaderBtn address={"/"} text={"홈"} />
        </div>
      </div>
    </header>
  );
};

export default Header2;