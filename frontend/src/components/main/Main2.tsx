import { useNavigate } from 'react-router-dom';
import '../../css/main2.css';

const Main2 = () => {

  const navigate = useNavigate();

  const main2BtnHandle = () => {
    navigate('/clubjoin')
  }

  return (
    <div className='main2'>
      <div className='main2_container'>
        <div className='main2_title-top'>
          <span>내가 먼저</span>
        </div>
        <div className='main2_title-bottom'>
          <span>시작하는 동아리</span>
        </div>
        <div className='main2_subtitle'>
          <span>동아리를 직접 만들어도 OK!</span>
          <div className='main2_btn' onClick={() => main2BtnHandle()}>
            <span>동아리 신청하기</span>
          </div>
        </div>
        <div className='main2_img'>
          <img src=''/>
        </div>
      </div>
    </div>
  )
}

export default Main2;
