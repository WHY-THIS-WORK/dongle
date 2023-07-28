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

  const [image, setImage] = useState("");

  const [name, setName] = useState("닉네임");
  const [email, setEmail] = useState("TEST@TEST.com");
  const [tel, setTel] = useState("010-1234-1234");

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [telMessage, setTelMessage] = useState("");

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isTel, setIsTel] = useState(false);

  const [emailEdit, setEmailEdit] = useState(false);
  const [telEdit, setTelEdit] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      window.alert("로그인 해주세요!");
      window.location.href = "/login";
      return;
    } else {
      const getUsersProfile = async () => {
        const response = await fetch("http://52.78.248.174:5173/users_profile");
        const data = await response.json();
        // 데이터 갈아 끼워줄 부분
        console.log(data);
      };
      getUsersProfile();
    }
  }, [isLogin]);

  const onEditHandler = () => {
    setEmailEdit(true);
    setTelEdit(true);
  };

  const onLogOutHandler = () => {
    setIsLogin(false);
    window.localStorage.removeItem("accessToken");
    window.location.href = "/";
    window.alert("로그아웃 되었습니다.");
  };

  const onChangeNameHandler = (event) => {
    const name = event.target.value;
    setName(name);
    const nameRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    if (nameRegex.test(name)) {
      setNameMessage("특수문자는 사용할 수 없습니다.");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
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

  const onEmailKeyUpHandler = async (event) => {
    if (event.key === "Enter" && isEmail) {
      setEmailEdit(false);
      const token = window.localStorage.getItem("accessToken");
      let body = {
        name: name,
        email: email,
        tel: tel,
      };
      await fetch("http://52.78.248.174:5173/modified_profile.json", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }).then((res) => {
        // 응답 받을 부분
        console.log(res.status);
      });
    }
  };

  const onNameKeyUpHandler = async (event) => {
    if (event.key === "Enter" && props.isName) {
      setNameEdit(false);
      const token = window.localStorage.getItem("accessToken");
      let body = {
        name: name,
        email: email,
        tel: tel,
      };
      await fetch("http://52.78.248.174:5173/modified_profile.json", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }).then((res) => {
        // 응답 받을 부분
        console.log(res.status);
      });
    }
  };

  const onTelKeyUpHandler = async (event) => {
    if (event.key === "Enter" && isTel) {
      setTelEdit(false);
      let body = {
        token: window.localStorage.getItem("accessToken"),
        name: name,
        email: email,
        tel: tel,
      };
      await fetch("http://52.78.248.174:5173/modified_profile.json", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }).then((res) => {
        // 응답 받을 부분
        console.log(res.status);
      });
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

  return (
    <div className="mypage-main">
      <div className="mypage-main__title">회원정보</div>
      <ProfileBlock
        image={image}
        name={name}
        onChangeNameHandler={onChangeNameHandler}
        message={nameMessage}
        isName={isName}
        onNameKeyUpHandler={onNameKeyUpHandler}
      />
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
