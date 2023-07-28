import React, { useState } from "react";
import { TableWrapper } from "./Board.styled";
import axios from "axios";
import { getPosts } from "../../apis/board.api";

interface Props {
  testBoardId: number;
  setPosts: Function;
  setIsWrite(param: boolean): void;
}

export default function BoardWrite({ testBoardId, setPosts, setIsWrite }: Props) {
  const [values, setValues] = useState({
    memberId: 321,
    boardId: testBoardId,
    title: "",
    contents: "",
  });

  const handleChange = (e: React.ChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5174/club/board", values).then((res) => {
      console.log(res);
      if (res.data === "suc") {
        getPosts(values.boardId, setPosts);
        setIsWrite(false);
      }
    });
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
            <input type='text' name='title' value={values.title} onChange={handleChange} />
            <br />
            <label htmlFor='contents'>내용</label>
            <textarea id='contents' name='contents' value={values.contents} onChange={handleChange} />
            <button type='submit'>글쓰기</button>
          </form>
        </div>
      </TableWrapper>
    </>
  );
}
