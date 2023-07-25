import '../css/clubjoin.css';
import Header from '../components/header/Header';
import JoinInputTitle from '../components/clubjoin/JoinInputTitle';
import JoinInputValue from '../components/clubjoin/JoinInputValue';
import JoinBtn from '../components/clubjoin/JoinBtn';
import JoinInputTextarea from '../components/clubjoin/JoinInputTextarea';
import SendBtn from '../components/public/SendBtn';

const Clubjoin = () => {

  return (
    <div className='clubjoin'>
      <Header />
      <div className="clubjoin_container">
        <div className="clubjoin_title">
          <h1>동아리 신청</h1>
        </div>
        <div className='clubjoin_input name'>
          <JoinInputTitle title='동아리명' />
          <JoinInputValue placeholder='한/영문 12자 이하' />
        </div>
        <div className='clubjoin_input categories'>
          <JoinInputTitle title='카테고리' />
          <JoinBtn />
        </div>
        <div className='clubjoin_input detail'>
          <JoinInputTitle title='동아리 설명' />
          <JoinInputValue placeholder='동아리에 대한 간단한 설명을 적어주세요.' />
        </div>
        <div className='clubjoin_input direction'>
          <JoinInputTitle title='동아리 활동방향' />
          <JoinInputTextarea />
        </div>
        <div className='clubjoin_input notice'>
          <JoinInputTitle title='게시판 선택' />
          {/* <div className="clubjoin_input-tag">
            <span>JS</span>
          </div> */}
          <JoinInputValue placeholder='게시판 이름을 입력해주세요.' />
        </div>
        <SendBtn text='동아리 신청하기' />
      </div>
    </div>
  )
}

export default Clubjoin;
