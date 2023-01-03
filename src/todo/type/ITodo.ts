export const TodoStatus = {
  TODO: "TODO",
  DONE: "DONE",
};
export interface ITodo {
  id: number;
  action: string;
  status: string;
}
