import React, { useState } from "react";
import SelectBar from "../components/mypage/Selectbar";
import Header from "../components/header/Header";
import "../css/mypage.css";
import MypageClub from "../components/mypage/MypageClub";

const MyClub = () => {
  const [selected, setSelected] = useState(true);

  const selectHandler = () => {
    if (selected) {
      setSelected(true);
      window.location.href = "/mypage/profile";
    }
  };

  return (
    <>
      <Header />
      <div className="mypage">
        <div className="mypage-container">
          <SelectBar selectHandler={selectHandler} selected={selected} />
          <MypageClub />
        </div>
      </div>
    </>
  );
};

export default MyClub;
