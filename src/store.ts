import { ITodo } from "./todo/type/ITodo";

export const TODO_KEY = "TODO_KEY";
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
};
