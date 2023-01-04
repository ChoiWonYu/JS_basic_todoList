export const TodoStatus = {
  TODO: "TODO",
  DONE: "DONE",
};
export type STATUS = typeof TodoStatus[keyof typeof TodoStatus];
export interface ITodo {
  id: number;
  action: string;
  status: STATUS;
  isUpdating: boolean;
}
