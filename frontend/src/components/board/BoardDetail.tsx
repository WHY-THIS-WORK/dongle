import { getPosts } from "../../apis/board.api";
import { TableWrapper } from "./Board.styled";
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
        <div>
          <button onClick={showList}>글목록</button>
          <button onClick={() => setIsUpdate(true)}>수정</button>
          <button onClick={deletePost}>삭제</button>
        </div>
        <div>게시판이름</div>
        <div>{detailPost.title}</div>
        <div>
          <span>{detailPost.memberId}</span>
          <span>{detailPost.insertDate}</span>
        </div>
        <hr />
        <div>{detailPost.contents}</div>
      </TableWrapper>
    </>
  );
}
