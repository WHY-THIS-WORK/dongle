import React, { useEffect, useState } from "react";
import "../../css/mypageMain.css";
import ProfileBlock from "./ProfileBlock";
import MypageInput from "./MypageInput";
import MypageProfileEditBtn from "./MypageProfileEditBtn";
import MypageLogoutBtn from "./MypageLogoutBtn";
import { useRecoilState } from "recoil";
import { LoginState } from "../../recoil/atoms/LoginState";

const MyProfile = () => {
  const [isLogin, setIsLogin] = useRecoilState(LoginState);

  const [email, setEmail] = useState("TEST@TEST.com");
  const [tel, setTel] = useState("010-1234-1234");

  const [emailMessage, setEmailMessage] = useState("");
  const [telMessage, setTelMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isTel, setIsTel] = useState(false);

  const [emailEdit, setEmailEdit] = useState(false);
  const [telEdit, setTelEdit] = useState(false);

  const onEditHandler = () => {
    setEmailEdit(true);
    setTelEdit(true);
  };

  const onLogOutHandler = () => {
    setIsLogin(false);
    window.localStorage.removeItem("토큰");
    window.location.href = "/";
    window.alert("로그아웃 되었습니다.");
  };

  const onEmailChangeHandler = (event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(event.target.value);

    if (!emailRegex.test(event.target.value)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onTelChangeHandler = (event) => {
    const telRegex = /^[0-9\b -]{0,13}$/;
    setTel(event.target.value);

    if (telRegex.test(event.target.value) && event.target.value.length === 13) {
      setTelMessage("");
      setIsTel(true);
    } else {
      setTelMessage("전화번호를 올바르게 입력해주세요.");
      setIsTel(false);
    }
  };

  const onEmailKeyUpHandler = (event) => {
    if (event.key === "Enter" && isEmail) {
      setEmailEdit(false);
    }
  };

  const onTelKeyUpHandler = (event) => {
    if (event.key === "Enter" && isTel) {
      setTelEdit(false);
    }
  };

  useEffect(() => {
    if (tel.length === 10) {
      setTel(tel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (tel.length === 13) {
      setTel(
        tel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [tel]);

  useEffect(() => {
    const isLoginHandler = () => {
      if (!isLogin) {
        window.alert("로그인 해주세요!");
        window.location.href = "/login";
      }

      isLoginHandler();
    };
  });

  useEffect(() => {
    const getUsersProfile = async () => {
      const response = await fetch("/users_profile.json");
      const data = await response.json();
      console.log(data);
    };
    getUsersProfile();
  }, []);

  return (
    <div className="mypage-main">
      <div className="mypage-main__title">회원정보</div>
      <ProfileBlock />
      <div className="mypage-input-box">
        <div className="mypage-input-container">
          <MypageInput
            name={"이메일"}
            info={email}
            edit={emailEdit}
            onChangeHandler={onEmailChangeHandler}
            onKeyUpHandler={onEmailKeyUpHandler}
            message={emailMessage}
          />
          <MypageInput
            name={"연락처"}
            info={tel}
            edit={telEdit}
            onChangeHandler={onTelChangeHandler}
            onKeyUpHandler={onTelKeyUpHandler}
            message={telMessage}
            max={13}
          />
          <MypageProfileEditBtn onEditHandler={onEditHandler} />
          <MypageLogoutBtn onLogOutHandler={onLogOutHandler} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
