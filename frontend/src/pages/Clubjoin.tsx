import "../css/clubjoin.css";
import Header from "../components/header/Header";
import JoinInputTitle from "../components/clubjoin/JoinInputTitle";
import JoinInputValue from "../components/clubjoin/JoinInputValue";
import JoinBtn from "../components/clubjoin/JoinBtn";
import JoinInputTextarea from "../components/clubjoin/JoinInputTextarea";
import SendBtn from "../components/public/SendBtn";
import { useState } from "react";

interface input{
  title: string,
  category: string,
  detail: string,
  direction: string,
  notice: string
}

const Clubjoin = () => {

  const [clubJoinInput, setClubJoinInput] = useState<input>(
    { title:'',
      category:'',
      detail:'',
      direction:'',
      notice : '' }
  )

  console.log(clubJoinInput);

  const inputHandle = (e:string, title:string) => {
    setClubJoinInput({ ...clubJoinInput, [title] : e})
  }

  return (
    <div className="clubjoin">
      <Header />
      <div className="clubjoin_container">
        <div className="clubjoin_title">
          <h1>동아리 신청</h1>
        </div>
        <div className="clubjoin_input name">
          <JoinInputTitle title="동아리명" />
          <JoinInputValue placeholder="한/영문 12자 이하"
          inputHandle={inputHandle}
            title="title"/>
        </div>
        <div className="clubjoin_input categories">
          <JoinInputTitle title="카테고리" />
          <JoinBtn inputHandle={inputHandle} title="category" />
        </div>
        <div className="clubjoin_input detail">
          <JoinInputTitle title="동아리 설명" />
          <JoinInputValue placeholder="동아리에 대한 간단한 설명을 적어주세요."
          inputHandle={inputHandle}
            title="detail"/>
        </div>
        <div className="clubjoin_input direction">
          <JoinInputTitle title="동아리 활동방향" />
          <JoinInputTextarea
            inputHandle={inputHandle}
            title="direction" />
        </div>
        <div className="clubjoin_input notice">
          <JoinInputTitle title="게시판 선택" />
          {/* <div className="clubjoin_input-tag">
            <span>JS</span>
          </div> */}
          <JoinInputValue placeholder="게시판 이름을 입력해주세요."
          inputHandle={inputHandle}
            title="notice"/>
        </div>
        <SendBtn text="동아리 신청하기" />
      </div>
    </div>
  );
};

export default Clubjoin;
