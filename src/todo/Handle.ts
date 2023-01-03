import { ITodo, TodoStatus } from "./type/ITodo.js";
import {
  hideUnselectedTodo,
  createTodoElement,
  deleteTodoElement,
} from "./Render.js";
import { getTodo, setTodo, appendTodo } from "../store.js";

export const removeTodo = (id: number) => {
  setTodo(getTodo().filter((todo) => todo?.id !== id));
  deleteTodoElement(id);
};

export const addTodo = (value: string) => {
  if (!value) return null;
  const id = Date.now();
  const newTodo: ITodo = {
    id,
    action: value,
    status: TodoStatus.TODO,
  };
  appendTodo(newTodo);
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
  appendTodo(newTodo);
  createTodoElement(newTodo);
  hideUnselectedTodo();
};
