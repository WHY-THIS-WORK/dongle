import React, { useEffect, useState } from "react";

const ClubList = ({ club }) => {
  const [leader, setLeader] = useState("");
  const [signed, setSigned] = useState("");

  useEffect(() => {
    if (club.isLeader) {
      setLeader("동아리장");
      setSigned("");
      return;
    }
    if (club.isValid === 0) {
      setSigned("검토중");
    }
  }, [leader, signed]);

  return (
    <>
      <div className="myclub-list">
        {club.name}
        {leader.length > 0 && (
          <span className="myclub-list-leader">{leader}</span>
        )}
        {signed.length > 0 && (
          <span className="myclub-list-signed">{signed}</span>
        )}
      </div>
    </>
  );
};

export default ClubList;
