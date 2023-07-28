import { useState, useEffect, EffectCallback } from "react";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardUpdate from "./BoardUpdate";
import axios from "axios";

interface Props {
  testBoardId: number;
}

export default function Board({ testBoardId }: Props) {
  const [isDetail, setIsDetail] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [gposts, setPosts] = useState("");

  useEffect(() => {
    (async (): Promise<any> => {
      await getPosts(testBoardId);
    })();
  }, []);

  const getPosts = async (boardId: number) => {
    await axios.get(`http://localhost:5174/club/board/${boardId}`).then((res) => {
      if (res.data === `success${boardId}`) {
        const str = res.data;
        setPosts(str);
      }
    });
  };

  return (
    <>
      {isWrite ? (
        <BoardWrite setIsWrite={setIsWrite} />
      ) : isUpdate ? (
        <BoardUpdate setIsUpdate={setIsUpdate} />
      ) : isDetail ? (
        <BoardDetail setIsDetail={setIsDetail} setIsUpdate={setIsUpdate} />
      ) : (
        <BoardList gposts={gposts} setIsDetail={setIsDetail} setIsWrite={setIsWrite} />
      )}
    </>
  );
}
