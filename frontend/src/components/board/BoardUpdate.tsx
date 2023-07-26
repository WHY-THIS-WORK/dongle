import React from "react";
import { TableWrapper } from "./Board.styled";

interface Props {
  setIsUpdate(param: boolean): void;
}

export default function BoardUpdate({ setIsUpdate }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    //제출
    e.preventDefault();
    console.log("제출");
    //axios.post('url/postid', formData) -> api 로직 분리
    // post? put?
  };

  return (
    <>
      <TableWrapper>
        <button onClick={() => setIsUpdate(false)}>취소</button>
        <div>
          <div>BoardWrite</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>제목</label>
            <br />
            <input type='text' />
            <br />
            <label htmlFor='contents'>내용</label>
            <textarea id='contents' />
            <button type='submit'>수정</button>
          </form>
        </div>
      </TableWrapper>
    </>
  );
}
