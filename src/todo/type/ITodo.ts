export type TodoStatus = "TODO" | "DONE";

export interface ITodo {
  id: number;
  action: string;
  status: TodoStatus;
}
