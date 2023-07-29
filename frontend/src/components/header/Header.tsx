import { useNavigate } from "react-router-dom";
import "../../css/header.css";
import HeaderBtn from "../header/HeaderBtn";
import logo from '../../assets/로고.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header_container">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="로고"/>
        </div>
        <div className="header_menu">
          <HeaderBtn address={"/clubjoin"} text={"동아리 신청"} />
          <HeaderBtn address={"/detail"} text={"동아리"} />
          <HeaderBtn address={"/mypage/profile"} text={"MY"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
