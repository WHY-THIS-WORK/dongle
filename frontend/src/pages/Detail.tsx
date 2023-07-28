
import { useEffect, useState } from 'react';
import axios from 'axios';
import DetailCategory from '../components/detail/DetailCategory';
import DetailText from '../components/detail/DetailText';
import DetailTitle from '../components/detail/DetailTitle';
import Header from '../components/header/Header';
import SendBtn from '../components/public/SendBtn';
import '../css/detail.css';
import { useLocation } from 'react-router-dom';

const Detail = () => {

  const [list, setList] = useState([]);

  const { pathname } = useLocation();
  const id = pathname.slice(8)

  useEffect(() => {
    axios.get(`http://52.78.248.174:5173/club/${id}`)
      .then((res) => {
        setList({...res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const sendBtnHandle = () => {
    return alert('동아리 신청이 완료되었습니다.');
  }

  return (
    <div className='detail'>
      <Header/>
      {/* <DetailCategory/> */}
      <div className="detail_container">
        <DetailTitle list={list}/>
        <DetailText list={list} />
        <SendBtn text='동아리 신청하기' sendBtnHandle={sendBtnHandle}/>
      </div>
    </div>
  )
}

export default Detail;
