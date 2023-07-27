import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../css/main3.css';
import ClubCard from "./ClubCard";

const Main3 = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const navigate = useNavigate();

  const temporaryList = [
    {
      title:'프론트엔드 커뮤니티',
      category:'코딩',
      text:'프론트엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'백엔드 커뮤니티',
      category:'코딩',
      text:'백엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'독서합시다',
      category:'독서',
      text:'독서를 좋아하는<br>동아리 입니다.'
    },
    {
      title:'프론트엔드 커뮤니티',
      category:'코딩',
      text:'프론트엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'백엔드 커뮤니티',
      category:'코딩',
      text:'백엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'독서합시다',
      category:'독서',
      text:'독서를 좋아하는<br>동아리 입니다.'
    },
    {
      title:'프론트엔드 커뮤니티',
      category:'코딩',
      text:'프론트엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'백엔드 커뮤니티',
      category:'코딩',
      text:'백엔드끼리 정보 공유와<br>소통을 위한 동아리 입니다.'
    },
    {
      title:'독서합시다',
      category:'독서',
      text:'독서를 좋아하는<br>동아리 입니다.'
    },
    
  ]

  // console.log('containerRef', containerRef);
  // console.log('isDragging', isDragging);
  // console.log('startX', startX);
  // console.log('scrollLeft', scrollLeft);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const walk = e.pageX - startX;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const main3BtnHandle = () => {
    navigate('/club')
  }
  
  return (
    <div className='main3'>
      <div className='main3_container'>
        <div className='main3_title'>
          <div className='main3_title-top'>
            <span>사람들과</span>
          </div>
          <div className='main3_title-bottom'>
            <span>함께하는 동아리</span>
          </div>
        </div>
        <div className='main3_subtitle'>
          <span>이미 만들어진 동아리에 참여해도 OK!</span>
          <div className='main3_btn' onClick={() => main3BtnHandle()}>
            <span>더 많은 동아리 보러가기</span>
          </div>
        </div>
        
      </div>
      <div
        className="main3_cards"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={containerRef}
      >
        <div className='main3_cards_container'>
          {temporaryList.map((item, index) => (
            <ClubCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main3;
