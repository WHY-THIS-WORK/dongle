import DetailCategory from '../components/detail/DetailCategory';
import DetailText from '../components/detail/DetailText';
import DetailTitle from '../components/detail/DetailTitle';
import Header from '../components/header/Header';
import SendBtn from '../components/public/SendBtn';
import '../css/detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <Header/>
      <DetailCategory/>
      <div className="detail_container">
        <DetailTitle/>
        <DetailText/>
        <SendBtn text='동아리 신청하기'/>
      </div>
    </div>
  )
}

export default Detail;
