import { styled } from "styled-components";

export default function SideBar() {
  return (
    <SidebarContainer>
      <SidebarInfoDiv>
        <ImgDiv>
          <Img src='/js-logo.svg' alt='vite-logo' />
        </ImgDiv>
        <ClubNameDiv>JavaScript 스터디</ClubNameDiv>
        <ClubDescDiv>같이 JS 공부해요!</ClubDescDiv>
      </SidebarInfoDiv>
      <SidebarBoardDiv>
        <div>목록</div>
        <div>공지사항</div>
        <div>게시판목록</div>
      </SidebarBoardDiv>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.3125rem;
  height: 50.5625rem;
  flex-shrink: 0;
`;

const SidebarInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.3125rem;
  height: 21.5625rem;
  flex-shrink: 0;
  margin-bottom: 8px;
  border: 1px solid #d9d9d9;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.3125rem;
  height: 15.3125rem;
  margin-bottom: 10px;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 14rem;
  border-radius: 1.25rem;
`;

const ClubNameDiv = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

const ClubDescDiv = styled.div`
  color: #636363;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SidebarBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.3125rem;
  height: 28.3125rem;
  flex-shrink: 0;
  color: black;
  border: 1px solid #d9d9d9;
`;
