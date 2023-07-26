import { TableWrapper } from "./Board.styled";

interface Props {
  setIsDetail(param: boolean): void;
  setIsUpdate(param: boolean): void;
}

export default function BoardDetail({ setIsDetail, setIsUpdate }: Props) {
  const deletePost = () => {
    //게시글 삭제
    //axios.delete('url/postid')
  };

  return (
    <>
      {/* <div>detail{post}</div> */}
      <TableWrapper>
        <div>
          <button onClick={() => setIsDetail(false)}>글목록</button>
          <button onClick={() => setIsUpdate(true)}>수정</button>
          <button onClick={() => deletePost}>삭제</button>
        </div>
        <div>게시판이름{/*board.name*/}</div>
        <div>게시글이름{/*post.title*/}</div>
        <div>
          <span>작성자{/*post.memberId*/}</span>
          <span>작성일{/*post.insertDate*/}</span>
        </div>
        <hr />
        <div>내용{/*post.contents*/}</div>
      </TableWrapper>
    </>
  );
}
