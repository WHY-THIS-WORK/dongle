import { styled } from "styled-components";
import { Table, TableWrapper } from "./Board.styled";
import { mposts } from "./Board.mock";
import axios from "axios";
import { Post } from "./Post.interface";

interface Props {
  setDetailPost(param: object): void;
  posts: Post[];
  setIsDetail(param: boolean): void;
  setIsWrite(param: boolean): void;
}

export default function BoardList({ setDetailPost, posts, setIsDetail, setIsWrite }: Props) {
  const tableHeadList = ["번호", "제목", "작성자", "작성일"];

  const showDetail = (e: React.SyntheticEvent) => {
    const td = e.target;
    const tdId = td.parentNode.firstChild;
    const postId = parseInt(tdId.textContent);
    const boardId = String(posts[0].boardId);
    axios.get(`http://localhost:5174/club/board/${boardId}/${postId}`).then((res) => {
      console.log(res.data);
      setDetailPost(res.data);
      setIsDetail(true);
    });
  };

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
                <tr key={i} onClick={(e) => showDetail(e)}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.memberId}</td>
                  <td>{post.insertDate}</td>
                </tr>
              ))}
            {mposts
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
          <Paragraph>{`총 ${mposts.length} 개의 글이 있습니다.`}</Paragraph>
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
