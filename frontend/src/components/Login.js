import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    id: "",
    pwd: "",
  });

  const onChangeHandler = (event) => {
    const { value, id } = event.target;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div className="login">
      <form onSubmit={onSubmitHandler}>
        <h1>로그인</h1>
        <div className="login__form">
          <div className="login__form-id">
            <label className="login__form-title">아이디</label>
            <input
              type="text"
              id="id"
              value={data.id}
              className="login__form-input"
              placeholder="아이디를 입력해주세요."
              onChange={onChangeHandler}
            />
          </div>
          <div className="login__form-pwd">
            <label className="login__form">비밀번호</label>
            <input
              type="password"
              id="pwd"
              value={data.pwd}
              className="login__form-input"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeHandler}
            />
          </div>
          <div className="login__button">
            <button type="submit" className="login__button-submit">
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
