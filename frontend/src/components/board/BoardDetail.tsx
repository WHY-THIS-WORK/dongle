import { styled } from "styled-components";
import { getPosts } from "../../apis/board.api";
import { BoardTitle, TableWrapper } from "./Board.styled";
import { Post } from "./Post.interface";
import axios from "axios";

interface Props {
  setPosts: Function;
  detailPost: Post;
  setIsDetail(param: boolean): void;
  setIsUpdate(param: boolean): void;
}

export default function BoardDetail({ setPosts, detailPost, setIsDetail, setIsUpdate }: Props) {
  console.log(detailPost);
  const deletePost = async () => {
    await axios.delete(`http://localhost:5174/club/board/${detailPost.boardId}/${detailPost.id}`);
    getPosts(detailPost.boardId, setPosts);
    setIsDetail(false);
  };

  const showList = async () => {
    getPosts(detailPost.boardId, setPosts);
    setIsDetail(false);
  };

  return (
    <>
      <TableWrapper>
        <PostHead>
          <ButtonDiv>
            <Button onClick={showList}>글목록</Button>
            <Button onClick={() => setIsUpdate(true)}>수정</Button>
            <Button onClick={deletePost}>삭제</Button>
          </ButtonDiv>
          <InfoDiv>
            <BoardTitle>modern_javascript</BoardTitle>
            <PostTitle>{detailPost.title}</PostTitle>
            <PostInfoDiv>
              <PostWriter>{detailPost.memberId}</PostWriter>
              <PostInsertDate>{detailPost.insertDate}</PostInsertDate>
            </PostInfoDiv>
          </InfoDiv>
        </PostHead>
        <PostBody>
          <div>{detailPost.contents}</div>
        </PostBody>
      </TableWrapper>
    </>
  );
}

const PostHead = styled.div`
  width: 100%;
  height: 15%;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(185, 185, 185, 0.5);
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 40px;
  right: 2%;
`;

const Button = styled.button`
  margin: 0px 2px;
  color: rgba(255, 255, 255, 0.87);
  background-color: #ff8256;
`;

const InfoDiv = styled.div`
  width: 100%;
  height: 100%;
  color: #000;
`;

const PostTitle = styled.div`
  margin: 0px 30px;
  color: #000;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PostInfoDiv = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: row;
`;

const PostWriter = styled.div`
  margin: 0px 30px;
  color: #acacac;
`;

const PostInsertDate = styled.div`
  color: #acacac;
`;

const PostBody = styled.div`
  margin: 30px;
  color: #000;
`;
