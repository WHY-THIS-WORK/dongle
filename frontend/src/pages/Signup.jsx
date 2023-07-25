import { SHA256 } from "crypto-js";
import React, { useCallback, useEffect, useRef, useState } from "react";
import IdCheck from "../components/IdCheck";
import "../css/signup.css";
import Header from "../components/Header";

const SignUp = () => {
  // 사용자 입력 상태 저장
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState("");
  const [pwd2Message, setPwd2Message] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [telMessage, setTelMessage] = useState("");

  // 유효성 검사 상태 저장
  const [isId, setIsId] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isPwd2, setIsPwd2] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(false);

  const idRef = useRef("");
  const pwdRef = useRef("");
  const pwd2Ref = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const telRef = useRef("");

  // onChangeHandler
  const onIdChangeHandler = (event) => {
    const id = event.target.value;
    setId(id);
    const idRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    if (idRegex.test(id)) {
      setIdMessage("특수문자는 사용할 수 없습니다.");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };

  const onIdCheckHandler = (userId) => {
    console.log(userId);
    let res = true;
    if (res === true) {
      setIdMessage("사용 가능한 아이디입니다.");
      setIsIdChecked(true);
    } else {
      setIdMessage("중복된 아이디입니다.");
      setIsIdChecked(false);
    }
  };

  const onPwdChangeHandler = useCallback((event) => {
    const pw = event.target.value;
    setPwd(pw);
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwdRegex.test(pw)) {
      setPwdMessage("영문자, 숫자, 특수문자 조합된 8자 이상");
      setIsPwd(false);
    } else {
      setPwdMessage("안전한 비밀번호입니다.");
      setIsPwd(true);
    }
  }, []);

  const onPwdCheckHandler = useCallback(
    (event) => {
      setPwd2(event.target.value);
      if (pwd === event.target.value) {
        setPwd2Message("비밀번호가 일치합니다.");
        setIsPwd2(true);
      } else {
        setPwd2Message("비밀번호가 일치하지 않습니다.");
        setIsPwd2(false);
      }
    },
    [pwd]
  );

  const onNameChangeHandler = (event) => {
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (isId && isIdChecked && isPwd && isPwd2 && isName && isEmail && isTel) {
      const sha256Pwd = SHA256(pwd).toString();
      let body = {
        id: id,
        pwd: sha256Pwd,
        name: name,
        email: email,
        tel: tel,
      };
      console.log(body);
    } else if (!isId) {
      idRef.current.focus();
      setIdMessage("아이디를 입력해주세요.");
    } else if (!isIdChecked) {
      idRef.current.focus();
      setIdMessage("아이디 중복 확인을 해주세요.");
    } else if (!isPwd) {
      pwdRef.current.focus();
      setPwdMessage("비밀번호를 입력해주세요.");
    } else if (!isPwd2) {
      pwd2Ref.current.focus();
      setPwd2Message("비밀번호 확인을 입력해주세요.");
    } else if (!isName) {
      nameRef.current.focus();
      setNameMessage("이름을 입력해주세요.");
    } else if (!isEmail) {
      emailRef.current.focus();
      setEmailMessage("이메일을 입력해주세요.");
    } else if (!isTel) {
      telRef.current.focus();
      setTelMessage("전화번호를 입력해주세요.");
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
    <>
      <Header />
      <div className="signup">
        <form onSubmit={onSubmitHandler}>
          <div className="signup__form">
            <div className="signup__title">회원가입</div>
            <div className="signup__form-block">
              <label className="signup__form-title">아이디</label>
              <input
                type="text"
                id="id"
                value={id}
                className="signup__form-input"
                placeholder="아이디를 입력해주세요."
                onChange={onIdChangeHandler}
                ref={idRef}
              />
              <IdCheck
                id={id}
                idMessage={idMessage}
                isId={isId}
                onIdCheckHandler={onIdCheckHandler}
              />
            </div>
            <div className="signup__form-block">
              <label className="signup__form-title">비밀번호</label>
              <input
                type="password"
                id="pwd"
                value={pwd}
                className="signup__form-input"
                placeholder="영문자, 숫자, 특수문자 조합된 8자 이상"
                onChange={onPwdChangeHandler}
                ref={pwdRef}
              />
              {<span className="error__message">{pwdMessage}</span>}
            </div>
            <div className="signup__form-block">
              <label className="signup__form-title">비밀번호 확인</label>
              <input
                type="password"
                id="pwd2"
                value={pwd2}
                className="signup__form-input"
                placeholder="동일한 비밀번호를 다시 입력해주세요."
                onInput={onPwdCheckHandler}
                ref={pwd2Ref}
              />
              {<span className="error__message">{pwd2Message}</span>}
            </div>
            <div className="signup__form-block">
              <label className="signup__form-title">이름</label>
              <input
                type="text"
                id="name"
                maxLength={5}
                value={name}
                className="signup__form-input"
                placeholder="이름을 입력해주세요."
                onChange={onNameChangeHandler}
                ref={nameRef}
              />
              {<span className="error__message">{nameMessage}</span>}
            </div>
            <div className="signup__form-block">
              <label className="signup__form-title">이메일</label>
              <input
                type="email"
                id="email"
                value={email}
                className="signup__form-input"
                placeholder="이메일 주소를 입력해주세요."
                onChange={onEmailChangeHandler}
                ref={emailRef}
              />
              {<span className="error__message">{emailMessage}</span>}
            </div>
            <div className="signup__form-block">
              <label className="signup__form-title">연락처</label>
              <input
                type="tel"
                id="tel"
                value={tel}
                className="signup__form-input"
                placeholder="휴대폰 번호를 입력해주세요."
                onChange={onTelChangeHandler}
                ref={telRef}
              />
              {<span className="error__message">{telMessage}</span>}
            </div>
            <div className="signup__submit">
              <button type="submit" className="signup__submit-button">
                회원가입하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
