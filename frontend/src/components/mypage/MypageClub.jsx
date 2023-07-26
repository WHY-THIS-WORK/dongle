import React, { useState } from "react";
import "../../css/mypageMain.css";
import ActiveClub from "./ActiveClub";
import MypageClubEditBtn from "./MypageClubEditBtn";

const MypageClub = () => {
  const activeClub = [
    {
      idx: 1,
      name: "프론트엔드 커뮤니티",
      isLeader: false,
    },
    {
      idx: 2,
      name: "등산 동아리",
      isLeader: false,
    },
    {
      idx: 3,
      name: "맛집 탐방 동아리",
      isLeader: true,
    },
    {
      idx: 4,
      name: "리그오브레전드 동아리",
      isLeader: false,
    },
  ];
  const applyClub = [
    {
      idx: 1,
      name: "축구 동아리",
      isValid: 0,
    },
    {
      idx: 2,
      name: "농구 동아리",
      isValid: 1,
    },
  ];
  const proposeClub = [
    {
      idx: 1,
      name: "AI 동아리",
      isValid: 0,
    },
  ];
  return (
    <div className="mypage-main">
      <div className="mypage-main__title">내 동아리</div>
      <ActiveClub title={"활동 중인 동아리"} activeClub={activeClub} />
      <ActiveClub title={"신청한 동아리"} activeClub={applyClub} />
      <ActiveClub title={"내가 만든 동아리"} activeClub={proposeClub} />
      <MypageClubEditBtn />
    </div>
  );
};

export default MypageClub;
