import React, { useCallback, useEffect, useState } from "react";
import IdCheck from "../components/IdCheck";

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

  // onChangeHandler
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
    setIsId(true);
  };

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
    setIsName(true);
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

  const onIdCheckHandler = (userId) => {
    const res = true;
    if (res === true) {
      setIdMessage("사용 가능한 아이디입니다.");
      setIsId(true);
    } else {
      setIdMessage("");
    }
  };

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
    let body = {
      id: id,
      pwd: pwd,
      name: name,
      email: email,
      tel: tel,
    };
    console.log(body);
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
    <div className="signup">
      <form onSubmit={onSubmitHandler}>
        <h1>회원가입</h1>
        <div className="signup__form">
          <div className="signup__form-id">
            <label className="signup__form-title">아이디</label>
            <input
              type="text"
              id="id"
              value={id}
              className="signup__form-input"
              placeholder="아이디를 입력해주세요."
              onChange={onIdChangeHandler}
            />
            <IdCheck id={id} />
            {id.length > 0 && <span>{idMessage}</span>}
          </div>
          <div className="signup__form-pwd">
            <label className="signup__form-title">비밀번호</label>
            <input
              type="password"
              id="pwd"
              value={pwd}
              className="signup__form-input"
              placeholder="영문자, 숫자, 특수문자 조합된 8자 이상"
              onChange={onPwdChangeHandler}
            />
            {pwd.length > 0 && <span>{pwdMessage}</span>}
          </div>
          <div className="signup__form-pwd2">
            <label className="signup__form-title">비밀번호 확인</label>
            <input
              type="password"
              id="pwd2"
              value={pwd2}
              className="signup__form-input"
              placeholder="동일한 비밀번호를 다시 입력해주세요."
              onInput={onPwdCheckHandler}
            />
            {pwd2.length > 0 && <span>{pwd2Message}</span>}
          </div>
          <div className="signup__form-name">
            <label className="signup__form-title">이름</label>
            <input
              type="text"
              id="name"
              value={name}
              className="signup__form-input"
              placeholder="이름을 입력해주세요."
              onChange={onNameChangeHandler}
            />
            {name.length > 0 && <span>{nameMessage}</span>}
          </div>
          <div className="signup__form-email">
            <label className="signup__form-title">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              className="signup__form-input"
              placeholder="이메일 주소를 입력해주세요."
              onChange={onEmailChangeHandler}
            />
            {email.length > 0 && <span>{emailMessage}</span>}
          </div>
          <div className="signup__form-tel">
            <label className="signup__form-title">연락처</label>
            <input
              type="tel"
              id="tel"
              value={tel}
              className="signup__form-input"
              placeholder="휴대폰 번호를 입력해주세요."
              onChange={onTelChangeHandler}
            />
            {tel.length > 0 && <span>{telMessage}</span>}
          </div>
          <div className="signup__submit">
            <button
              type="submit"
              disabled={
                !(isId && isPwd && isPwd2 && isName && isEmail && isTel)
              }
              className="signup__submit-button"
            >
              회원 가입하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
