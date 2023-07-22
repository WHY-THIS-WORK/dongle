import React from "react";

const LogoutButton = () => {
  const onLogoutHandler = () => {
    window.localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  return (
    <div className="Logout">
      <button id="logout" type="button" onClick={onLogoutHandler}>
        로그아웃
      </button>
    </div>
  );
};

export default LogoutButton;
