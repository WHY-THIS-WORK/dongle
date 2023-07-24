import React from 'react';
import '../css/clubjoin.css';
import Header from '../components/Header';

const Clubjoin = () => {

  return (
    <div className='clubjoin'>
      <Header />
      <div className="clubjoin_container">
        <div className="clubjoin_title">
          <h1>동아리 신청</h1>
        </div>
        <div className='clubjoin_input'>
          <div className="clubjoin_input-title">
            <span>동아리명</span>
          </div>
          <div className="clubjoin_input-value">
            <input type='text' placeholder='한/영문 12자 이하' />
          </div>
        </div>
        <div className='clubjoin_input'>
          <div className="clubjoin_input-title">
            <span>카테고리</span>
          </div>
          <div className="clubjoin_input-value">
            <button className='active'>코딩</button>
            <button>독서</button>
            <button>운동</button>
            <button>기타</button>
          </div>
        </div>
        <div className='clubjoin_input'>
          <div className="clubjoin_input-title">
            <span>동아리 설명</span>
          </div>
          <div className="clubjoin_input-value">
            <input type='text' placeholder='동아리에 대한 간단한 설명을 적어주세요.' />
          </div>
        </div>
        <div className='clubjoin_input'>
          <div className="clubjoin_input-title">
            <span>동아리 활동방향</span>
          </div>
          <div className="clubjoin_input-value">
            <textarea placeholder='동아리를 통해 하고 싶은것들을 적어주세요.' />
          </div>
        </div>
        <div className='clubjoin_input'>
          <div className="clubjoin_input-title">
            <span>게시판 선택</span>
          </div>
          {/* <div className="clubjoin_input-tag">
            <span>JS</span>
          </div> */}
          <div className="clubjoin_input-value">
            <input type='text' placeholder='게시판 이름을 입력해주세요.' />
          </div>
        </div>
        <div className="clubjoin_btn-send">
          <button>동아리 신청하기</button>
        </div>
      </div>
    </div>
  )
}

export default Clubjoin;
