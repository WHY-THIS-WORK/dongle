import { TableWrapper } from "./Board.styled";
import { Post } from "./Post.interface";

interface Props {
  detailPost: Post;
  setIsDetail(param: boolean): void;
  setIsUpdate(param: boolean): void;
}

export default function BoardDetail({ detailPost, setIsDetail, setIsUpdate }: Props) {
  const deletePost = () => {
    //게시글 삭제
    //axios.delete('url/postid')
  };

  return (
    <>
      <TableWrapper>
        <div>
          <button onClick={() => setIsDetail(false)}>글목록</button>
          <button onClick={() => setIsUpdate(true)}>수정</button>
          <button onClick={() => deletePost}>삭제</button>
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
