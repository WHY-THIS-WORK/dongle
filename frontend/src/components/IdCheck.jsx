import React from "react";
import "../css/idcheck.css";

const IdCheck = ({ id, idMessage, onIdCheckHandler }) => {
  return (
    <div className="id-check">
      <button
        className="id-check__button"
        id="id-check"
        type="button"
        onClick={() => onIdCheckHandler(id)}
      >
        아이디 중복 확인
      </button>
      {<span className="error__message">{idMessage}</span>}
    </div>
  );
};

export default IdCheck;
