import axios from "axios";

export const getPosts = async (boardId: number, callbackFn: Function) => {
  await axios.get(`http://localhost:5174/club/board/${boardId}`).then((res) => {
    if (res.data.length) {
      const arr = [...res.data];
      console.log(arr);
      callbackFn(arr);
    } else {
      console.log("emptyboard");
    }
  });
};
