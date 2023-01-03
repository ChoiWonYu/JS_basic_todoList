import { ITodo, TodoStatus } from "./type/ITodo";
import {
  hideUnselectedTodo,
  createTodoElement,
  deleteTodoElement,
} from "./Render";
import { getTodo, setTodo } from "../store";

export const removeTodo = (id: number) => {
  console.log(id);
  setTodo(getTodo().filter((todo) => todo?.id !== id));
};

export const addTodo = (value: string | undefined) => {
  if (!value) return null;
  const id = Date.now();
  const newTodo: ITodo = {
    id,
    action: value,
    status: TodoStatus.TODO,
  };
  getTodo().push(newTodo);
  createTodoElement(newTodo);
  hideUnselectedTodo();
};

export const doneTodo = (id: number) => {
  const targetTodo = getTodo().filter((todo) => todo.id === id)[0];
  removeTodo(id);
  const newTodo = {
    ...targetTodo,
    status: TodoStatus.DONE,
  };
  getTodo().push(newTodo);
  createTodoElement(targetTodo);
  hideUnselectedTodo();
};
