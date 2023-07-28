import Board from "../components/board";
import SideBar from "../components/club/SideBar";
import Header from "../components/header/Header";
import { styled } from "styled-components";

export default function Club() {
  return (
    <>
      <ClubContainer className='club'>
        <Header />
        <ColumnWrapper>
          <RowWrapper>
            <ClubSideBar>
              <SideBar />
            </ClubSideBar>
            <BoardComponent>
              <Board />
            </BoardComponent>
          </RowWrapper>
        </ColumnWrapper>
      </ClubContainer>
    </>
  );
}

const ClubContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: beige;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ClubSideBar = styled.div`
  width: 245px;
  height: 810px;
`;
const BoardComponent = styled.div`
  width: 1225px;
  height: 810px;
  color: white;
  background-color: blue;
`;
