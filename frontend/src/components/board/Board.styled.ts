import { styled } from "styled-components";

const Table = styled.table`
  padding-top: 20px;
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 1.5rem;
  background-color: white;
  border-top: 1px solid rgba(185, 185, 185, 0.5);
`;

const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid rgba(185, 185, 185, 0.5);
  background-color: whitesmoke;
`;

const BoardTitle = styled.div`
  margin: 10px 20px;
  width: 150px;
  height: 50px;
  color: #ff8256;
  padding-left: 10px;
  font-family: Inter;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { Table, TableWrapper, BoardTitle };
