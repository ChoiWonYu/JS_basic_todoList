import { ITodo } from "./todo/type/ITodo.js";
import { TODO_KEY } from "./todo/type/consts.js";

let TodoList: ITodo[] = [];

export const storeTodo = (todo: ITodo[]) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todo));
};

export const initialGetTodo = () => {
  const returnTodoList = localStorage.getItem(TODO_KEY);
  if (returnTodoList) {
    return JSON.parse(returnTodoList) as ITodo[];
  }
};

export const getTodo = (): ITodo[] => {
  return TodoList;
};

export const setTodo = (newTodoList: ITodo[]) => {
  TodoList = newTodoList;
  storeTodo(TodoList);
};

export const appendTodo = (newTodo: ITodo) => {
  setTodo(TodoList.concat([newTodo]));
};
