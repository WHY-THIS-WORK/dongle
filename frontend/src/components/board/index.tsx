import { useState, useEffect } from "react";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardUpdate from "./BoardUpdate";
import { getPosts } from "../../apis/board.api";

interface Props {
  testBoardId: number;
}

export default function Board({ testBoardId }: Props) {
  const [isDetail, setIsDetail] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async (): Promise<any> => {
      await getPosts(testBoardId, setPosts);
    })();
  }, []);

  return (
    <>
      {isWrite ? (
        <BoardWrite testBoardId={testBoardId} setPosts={setPosts} setIsWrite={setIsWrite} />
      ) : isUpdate ? (
        <BoardUpdate setIsUpdate={setIsUpdate} />
      ) : isDetail ? (
        <BoardDetail setIsDetail={setIsDetail} setIsUpdate={setIsUpdate} />
      ) : (
        <BoardList posts={posts} setIsDetail={setIsDetail} setIsWrite={setIsWrite} />
      )}
    </>
  );
}
