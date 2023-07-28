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

  const [detailPost, setDetailPost] = useState({
    id: 0,
    boardId: 0,
    memberId: 0,
    title: "",
    contents: "",
    insertDate: "",
    updateDate: "",
    deleted: 0,
  });

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
        <BoardUpdate detailPost={detailPost} setPosts={setPosts} setIsUpdate={setIsUpdate} />
      ) : isDetail ? (
        <BoardDetail detailPost={detailPost} setIsDetail={setIsDetail} setIsUpdate={setIsUpdate} />
      ) : (
        <BoardList setDetailPost={setDetailPost} posts={posts} setIsDetail={setIsDetail} setIsWrite={setIsWrite} />
      )}
    </>
  );
}
