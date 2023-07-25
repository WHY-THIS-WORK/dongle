import Header from '../components/header/Header';
import SendBtn from '../components/public/SendBtn';
import '../css/detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <Header/>
      <div className='detail_category'>
        <span>`${'코딩 동아리'}{'>'}${'프론트엔드 커뮤니티'}{'>'}${'상세페이지'}`</span>
      </div>
      <div className="detail_container">
        <div className="detail_title">
          <h1>프론트엔드 커뮤니티</h1>
          <span>프론트엔드끼리 정보 공유와<br/>
          소통을 위한 동아리 입니다.</span>
        </div>
        <div className="detail_text">
          <span>안녕하세요!<br/>
            저희는 주니어 프론트엔드끼리 자유로운 정보 공유와 소통을 목적으로 만들어진 동아리입니다!
            <br />
            저희는 주니어 프론트엔드끼리 자유로운 정보 공유와 소통을 목적으로 만들어진 동아리입니다!
            <br />
            저희는 주니어 프론트엔드끼리 자유로운 정보 공유와 소통을 목적으로 만들어진 동아리입니다!
            <br />
            저희는 주니어 프론트엔드끼리 자유로운 정보 공유와 소통을 목적으로 만들어진 동아리입니다!
            <br />
            <br />
            저희는 주니어 프론트엔드끼리 자유로운 정보 공유와 소통을 목적으로 만들어진 동아리입니다!
          </span>
        </div>
        <SendBtn text='동아리 신청하기'/>
      </div>
    </div>
  )
}

export default Detail;
