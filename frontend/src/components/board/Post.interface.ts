export interface Post {
  id: number;
  boardId: number;
  memberId: number;
  title: string;
  contents: string;
  insertDate: string;
  updateDate: string;
  deleted: number;
}
