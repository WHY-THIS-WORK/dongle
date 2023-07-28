import React from "react";
import "../../css/mypageclub.css";
import ClubList from "./ClubList";

const ActiveClub = (props) => {
  const activeClub = props.activeClub;
  return (
    <div className="myclub">
      <div className="myclub-container">
        <div className="myclub-title">{props.title}</div>
        <div className="myclub-box">
          {activeClub.map((club) => (
            <ClubList club={club} key={club.idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveClub;
