import { styled } from "styled-components";

export default function SideBar() {
  return (
    <div>
      <SidebarUpperDiv>
        <div>
          <img src='/vite.svg' alt='vite-logo' />
        </div>
        <div>개설일</div>
        <div>설명</div>
      </SidebarUpperDiv>
      <SidebarLowerDiv>
        <div>목록</div>
        <div>공지사항</div>
        <div>게시판목록</div>
      </SidebarLowerDiv>
    </div>
  );
}

const SidebarUpperDiv = styled.div`
  width: 245px;
  height: 345px;
  margin-bottom: 10px;
`;

const SidebarLowerDiv = styled.div`
  width: 245px;
  height: 455px;
`;
