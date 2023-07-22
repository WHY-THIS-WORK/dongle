import React from "react";

const IdCheck = (props) => {
  const onIdCheckHandler = () => {
    const userId = props.id;
    console.log(userId);
  };

  return (
    <div className="id-check__button">
      <button id="id-check" type="button" onClick={onIdCheckHandler}>
        아이디 중복 확인
      </button>
    </div>
  );
};

export default IdCheck;
