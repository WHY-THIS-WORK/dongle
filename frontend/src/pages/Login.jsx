import { SHA256 } from "crypto-js";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SignupButton from "../components/SignupButton";
import "../css/login.css";
import Header from "../components/Header";

const Login = () => {
  // 사용자 입력 상태 저장
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState("");

  // 유효성 검사 상태 저장
  const [isId, setIsId] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  const idRef = useRef();
  const pwdRef = useRef();

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsId(true);
      setIdMessage("");
    } else {
      setIsId(false);
    }
  };

  const onPwdChangeHandler = (event) => {
    setPwd(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsPwd(true);
      setPwdMessage("");
    } else {
      setIsPwd(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (isId && isPwd) {
      const sha256Pwd = SHA256(pwd).toString();

      let body = {
        id: id,
        pwd: sha256Pwd,
      };
      console.log(body);

      // axios
      //   .post("/login", body)
      //   .then((res) => {
      //     console.log(res);
      //     const accessToken = res.data.access_token;
      //     if ((res.data = "200")) {
      //       window.alert("로그인이 완료되었습니다.");
      //       window.localStorage.setItem(res.accessToken);
      //       window.location.href = "/";
      //     } else if ((res.data = "errorName")) {
      //       window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      //     }
      //   })
      //   .catch((error) => {
      //     window.alert(error);
      //   });
    } else if (!isId) {
      idRef.current.focus();
      setIdMessage("아이디를 입력해주세요.");
    } else {
      pwdRef.current.focus();
      setPwdMessage("비밀번호를 입력해주세요.");
    }
  };

  return (
    <>
      <Header />
      <div className="login">
        <form onSubmit={onSubmitHandler}>
          <div className="login__form">
            <div className="login__title">로그인</div>
            <div className="login__form-block">
              <label className="login__form-title">아이디</label>
              <input
                type="text"
                id="id"
                value={id}
                className="login__form-input"
                placeholder="아이디를 입력해주세요."
                onInput={onIdChangeHandler}
                ref={idRef}
              />
              {<span className="error__message">{idMessage}</span>}
            </div>
            <div className="login__form-block">
              <label className="login__form-title">비밀번호</label>
              <input
                type="password"
                id="pwd"
                value={pwd}
                className="login__form-input"
                placeholder="비밀번호를 입력해주세요."
                onChange={onPwdChangeHandler}
                ref={pwdRef}
              />
              {<span className="error__message">{pwdMessage}</span>}
            </div>
            <div className="login__submit">
              <button id="login" type="submit" className="login__submit-button">
                로그인
              </button>
            </div>
            <SignupButton />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
