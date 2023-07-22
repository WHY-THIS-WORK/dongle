import { SHA256 } from "crypto-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SignupButton from "../components/SignupButton";

const Login = () => {
  const [data, setData] = useState({
    id: "",
    pwd: "",
  });

  const pwdHashing = (pwd) => {
    const sha256Pwd = SHA256(pwd).toString();
    return setData((prevState) => ({
      ...prevState,
      pwd: sha256Pwd,
    }));
  };

  const onChangeHandler = (event) => {
    const { value, id } = event.target;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (data.id.trim().length === 0 || data.pwd.trim().length === 0) {
      window.alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    let body = {
      id: data.id,
      pwd: data.pwd,
    };

    axios
      .post("/login", body)
      .then((res) => {
        console.log(res);
        const accessToken = res.data.access_token;
        if ((res.data = "200")) {
          window.alert("로그인이 완료되었습니다.");
          window.localStorage.setItem(res.accessToken);
          window.location.href = "/";
        } else if ((res.data = "errorName")) {
          window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={onSubmitHandler}>
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
          <div className="login__submit">
            <button id="login" type="submit" className="login__button-submit">
              로그인
            </button>
            <SignupButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
