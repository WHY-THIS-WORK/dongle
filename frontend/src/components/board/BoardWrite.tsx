import React from "react";
import { TableWrapper } from "./Board.styled";

interface Props {
  setIsWrite(param: boolean): void;
}

export default function BoardWrite({ setIsWrite }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    //제출
    e.preventDefault();
    console.log("제출");
    //axios.post('url', formData) -> api 로직 분리
  };

  return (
    <>
      <TableWrapper>
        <button onClick={() => setIsWrite(false)}>글목록</button>
        <div>
          <div>BoardWrite</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>제목</label>
            <br />
            <input type='text' />
            <br />
            <label htmlFor='contents'>내용</label>
            <textarea id='contents' />
            <button type='submit'>글쓰기</button>
          </form>
        </div>
      </TableWrapper>
    </>
  );
}
