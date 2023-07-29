import { SHA256 } from "crypto-js";
import * as React from "react";
import "../css/login.css";
import MoveToSignupBtn from "../components/login/MoveToSignupBtn";
import LoginInput from "../components/login/LoginInput";
import Header2 from "../components/header/Header2";
import LoginSubmitBtn from "../components/login/LoginSubmitBtn";
import { useRecoilState } from "recoil";
import { LoginState } from "../recoil/atoms/LoginState";

const Login = (): React.ReactElement => {
  const [isLogin, setIsLogin] = useRecoilState<boolean>(LoginState);
  // 사용자 입력 상태 저장
  const [id, setId] = React.useState<string>("");
  const [pwd, setPwd] = React.useState<string>("");

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = React.useState<string>("");
  const [pwdMessage, setPwdMessage] = React.useState<string>("");

  // 유효성 검사 상태 저장
  const [isId, setIsId] = React.useState<boolean>(false);
  const [isPwd, setIsPwd] = React.useState<boolean>(false);

  const idRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const pwdRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const onIdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsId(true);
      setIdMessage("");
    } else {
      setIsId(false);
    }
  };

  const onPwdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsPwd(true);
      setPwdMessage("");
    } else {
      setIsPwd(false);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isId && isPwd) {
      const sha256Pwd = SHA256(pwd).toString();

      let body = {
        loginId: id,
        loginPassword: sha256Pwd,
      };

      await fetch("http://52.78.248.174:5173/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const data = res.json();
          data.then((data) => {
            if (data.result) {
              window.alert(data.message);
              window.location.href = "/";
              setIsLogin(true);
              window.localStorage.setItem("accessToken", data.data.token);
            } else {
              console.log(data);
              window.alert(data.message);
            }
          });
        })

        .catch((error) => {
          console.log(error);
        });
    } else if (!isId) {
      idRef.current.focus();
      setIdMessage("아이디를 입력해주세요.");
    } else {
      pwdRef.current.focus();
      setPwdMessage("비밀번호를 입력해주세요.");
    }
  };

  return (
    <div className="login">
      <Header2 />
      <form onSubmit={onSubmitHandler}>
        <div className="login__form">
          <div className="login__title">로그인</div>
          <LoginInput
            title={"아이디"}
            type={"text"}
            id={"id"}
            value={id}
            onChangeHandler={onIdChangeHandler}
            ref={idRef}
            message={idMessage}
            placeholder={"아이디를 입력해주세요."}
          />
          <LoginInput
            title={"비밀번호"}
            type={"password"}
            id={"pwd"}
            value={pwd}
            onChangeHandler={onPwdChangeHandler}
            ref={pwdRef}
            message={pwdMessage}
            placeholder={"비밀번호를 입력해주세요."}
          />
          <LoginSubmitBtn />
          <MoveToSignupBtn />
        </div>
      </form>
    </div>
  );
};

export default Login;
