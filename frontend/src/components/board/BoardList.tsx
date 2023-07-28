import { styled } from "styled-components";
import { Table, TableWrapper } from "./Board.styled";
import { posts } from "./Board.mock";

interface Props {
  setIsDetail(param: boolean): void;
  setIsWrite(param: boolean): void;
}

export default function BoardList({ setIsDetail, setIsWrite }: Props) {
  const tableHeadList = ["번호", "제목", "작성자", "작성일"];

  return (
    <>
      <TableWrapper>
        <Table>
          <caption>게시판이름</caption>
          <colgroup>
            <col width='10%' />
            <col width='*' />
            <col width='10%' />
            <col width='15%' />
          </colgroup>
          <thead>
            <tr>
              {tableHeadList.map((value, i) => (
                <th key={i}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts
              .sort((a, b) => b["id"] - a["id"])
              .map((post, i) => (
                <tr key={i} onClick={() => setIsDetail(true)}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                  <td>{post.insertDate}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <BtnWrapper>
          <Paragraph>{`총 ${posts.length} 개의 글이 있습니다.`}</Paragraph>
          <WriteBtn onClick={() => setIsWrite(true)}>글쓰기</WriteBtn>
        </BtnWrapper>
      </TableWrapper>
    </>
  );
}

const BtnWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  width: inherit;
  bottom: 0;
`;

const Paragraph = styled.p`
  color: green;
`;

const WriteBtn = styled.button``;
