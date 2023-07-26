import { useState } from "react";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardUpdate from "./BoardUpdate";

export default function Board() {
  const [isDetail, setIsDetail] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <>
      {isWrite ? (
        <BoardWrite setIsWrite={setIsWrite} />
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
