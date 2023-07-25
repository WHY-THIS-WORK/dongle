import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    id: "",
    pwd: "",
    name: "",
    email: "",
    tel: "",
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
    <div className="signup">
      <form onSubmit={onSubmitHandler}>
        <h1>회원가입</h1>
        <div className="signup__form">
          <div className="signup__form-id">
            <label className="signup__form-title">아이디</label>
            <input
              type="text"
              id="id"
              value={data.id}
              className="signup__form-input"
              placeholder="아이디를 입력해주세요."
              onChange={onChangeHandler}
            />
          </div>
          <div className="signup__form-pwd">
            <label className="signup__form-title">비밀번호</label>
            <input
              type="password"
              id="pwd"
              value={data.pwd}
              className="signup__form-input"
              placeholder="영문자, 숫자, 특수문자 조합된 8자 이상"
              onChange={onChangeHandler}
            />
          </div>
          <div className="signup__form-pwd2">
            <label className="signup__form-title">비밀번호 확인</label>
            <input
              type="password"
              id="pwd2"
              className="signup__form-input"
              placeholder="동일한 비밀번호를 다시 입력해주세요."
            />
          </div>
          <div className="signup__form-name">
            <label className="signup__form-title">닉네임</label>
            <input
              type="text"
              id="name"
              value={data.name}
              className="signup__form-input"
              placeholder="한/영문자, 숫자, 특수문자 조합된 8자 미만"
              onChange={onChangeHandler}
            />
          </div>
          <div className="signup__form-email">
            <label className="signup__form-title">이메일</label>
            <input
              type="email"
              id="email"
              value={data.email}
              className="signup__form-input"
              placeholder="이메일 주소를 입력해주세요."
              onChange={onChangeHandler}
            />
          </div>
          <div className="signup__form-tel">
            <label className="signup__form-title">연락처</label>
            <input
              type="tel"
              id="tel"
              value={data.tel}
              className="signup__form-input"
              placeholder="휴대폰 번호를 입력해주세요."
              onChange={onChangeHandler}
            />
          </div>
          <div className="signup__button">
            <button type="submit" className="signup__button-submit">
              회원 가입하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
