import { useState, useEffect, EffectCallback } from "react";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardUpdate from "./BoardUpdate";
import axios from "axios";

interface Props {
  testBoardId: number;
}

interface PostsArr {
  id: number;
  boardId: number;
  memberId: number;
  title: string;
  contents: string;
  insertDate: string;
  updateDate: string;
  deleted: number;
}

export default function Board({ testBoardId }: Props) {
  const [isDetail, setIsDetail] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [gposts, setPosts] = useState([]);

  useEffect(() => {
    (async (): Promise<any> => {
      await getPosts(testBoardId);
    })();
  }, []);

  const getPosts = async (boardId: number) => {
    await axios.get(`http://localhost:5174/club/board/${boardId}`).then((res) => {
      if (res.data.length) {
        const arr = [...res.data];
        console.log(arr);
      } else {
        console.log("emptyboard");
      }
    });
  };

  return (
    <>
      {isWrite ? (
        <BoardWrite testBoardId={testBoardId} setIsWrite={setIsWrite} />
      ) : isUpdate ? (
        <BoardUpdate setIsUpdate={setIsUpdate} />
      ) : isDetail ? (
        <BoardDetail setIsDetail={setIsDetail} setIsUpdate={setIsUpdate} />
      ) : (
        <BoardList setIsDetail={setIsDetail} setIsWrite={setIsWrite} />
      )}
    </>
  );
}
