import { useNavigate } from "react-router-dom";
import "../../css/headerBtn.css";

interface navigate {
  address: string;
  text: string;
}

const HeaderBtn = (props: navigate) => {
  const navigate = useNavigate();

  const naviHandle = () => {
    console.log(props.address);
    navigate(props.address);
  };

  return (
    <>
      {props.text === "MY" || props.text === "홈" ? (
        <div className="headerBtn" onClick={() => naviHandle()}>
          <span className="header_menu-mybtn">{props.text}</span>
        </div>
      ) : (
        <div onClick={() => naviHandle()}>
          <span className="header_menu-btn">{props.text}</span>
        </div>
      )}
    </>
  );
};

export default HeaderBtn;
