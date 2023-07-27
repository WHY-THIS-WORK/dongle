import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SelectBar from "../components/mypage/Selectbar";
import Header from "../components/header/Header";
import MyProfile from "../components/mypage/MyProfile";
import "../css/mypage.css";

const Mypage = () => {
  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    if (!selected) {
      setSelected(true);
      window.location.href = "/mypage/myclub";
    }
  };

  return (
    <>
      <Header />
      <div className="mypage">
        <div className="mypage-container">
          <SelectBar selectHandler={selectHandler} selected={selected} />
          <MyProfile />
        </div>
      </div>
    </>
  );
};

export default Mypage;
