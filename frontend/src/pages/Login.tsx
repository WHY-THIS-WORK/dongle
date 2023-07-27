import { SHA256 } from "crypto-js";
import * as React from "react";
import "../css/login.css";
import MoveToSignupBtn from "../components/login/MoveToSignupBtn";
import LoginInput from "../components/login/LoginInput";
import Header from "../components/header/Header";
import LoginSubmitBtn from "../components/login/LoginSubmitBtn";

const Login = (): React.ReactElement => {
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

  const onSubmitHandler = async () => {
    if (isId && isPwd) {
      const sha256Pwd = SHA256(pwd).toString();

      let body = {
        id: id,
        pwd: sha256Pwd,
      };

      await fetch("/login.json", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    <div className="login">
      <Header />
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
