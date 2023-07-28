import React, { useState } from "react";
import { TableWrapper } from "./Board.styled";
import { Post } from "./Post.interface";
import axios from "axios";

interface Props {
  detailPost: Post;
  setDetailPost: Function;
  setIsUpdate(param: boolean): void;
}

export default function BoardUpdate({ detailPost, setDetailPost, setIsUpdate }: Props) {
  const [values, setValues] = useState({
    id: detailPost.id,
    boardId: detailPost.boardId,
    memberId: detailPost.memberId,
    title: detailPost.title,
    contents: detailPost.contents,
  });

  const handleChange = (e: React.ChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    //제출
    e.preventDefault();
    await axios.post(`http://localhost:5174/club/board/${detailPost.boardId}/${detailPost.id}`, values).then((res) => {
      setDetailPost(res.data);
      setIsUpdate(false);
    });
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
            <input type='text' name='title' value={values.title} onChange={handleChange} />
            <br />
            <label htmlFor='contents'>내용</label>
            <textarea id='contents' name='contents' value={values.contents} onChange={handleChange} />
            <button type='submit'>수정</button>
          </form>
        </div>
      </TableWrapper>
    </>
  );
}
