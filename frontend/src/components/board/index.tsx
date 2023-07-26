import { useState } from "react";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";

export default function Board() {
  const [isDetail, setIsDetail] = useState(false);

  return <>{isDetail ? <BoardDetail setIsDetail={setIsDetail} /> : <BoardList setIsDetail={setIsDetail} />}</>;
}
