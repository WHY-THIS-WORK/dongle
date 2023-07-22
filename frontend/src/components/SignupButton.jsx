import React from "react";

const SignupButton = () => {
  const onSignupHandler = () => {
    window.location.href = "signup";
  };

  return (
    <div className="signup__button">
      <button id="signup" type="button" onClick={onSignupHandler}>
        회원가입
      </button>
    </div>
  );
};

export default SignupButton;
