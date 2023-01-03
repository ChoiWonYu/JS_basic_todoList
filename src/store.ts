import { ITodo } from "./todo/type/ITodo";

export const TODO_KEY = "TODO_KEY";

export const storeTodo = (todo: ITodo[]) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todo));
};

export const getTodo = () => {
  const returnTodoList = localStorage.getItem(TODO_KEY);
  if (returnTodoList) {
    return JSON.parse(returnTodoList) as ITodo[];
  }
};
