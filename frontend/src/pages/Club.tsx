import Board from "../components/board";
import Header from "../components/header/Header";
import { styled } from "styled-components";

export default function Club() {
  return (
    <>
      <div className='club'>
        <Header />
        <ClubWrapper>
          <Vertical>
            <ClubSideBar>ClubSideBar 나와야 하고</ClubSideBar>
            <BoardComponent>
              <Board />
            </BoardComponent>
          </Vertical>
        </ClubWrapper>
      </div>
    </>
  );
}

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1920px;
  height: 1080px;
  background-color: beige;
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ClubSideBar = styled.div`
  width: 245px;
  height: 810px;
  color: white;
  background-color: red;
`;
const BoardComponent = styled.div`
  width: 1225px;
  height: 810px;
  color: white;
  background-color: blue;
`;
