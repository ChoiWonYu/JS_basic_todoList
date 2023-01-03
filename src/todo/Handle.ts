import { storeTodo } from "../store";
import { ITodo } from "./type/ITodo";

let id = 1;
const setTodo = (TodoList: ITodo[], newTodoList: ITodo[]) => {
  TodoList = newTodoList;
  storeTodo(TodoList);
};

const addTodo = (TodoList: ITodo[], action: string) => {
  const newTodo: ITodo = {
    id,
    action,
    status: "TODO",
  };
  setTodo(TodoList, TodoList?.concat(newTodo));
  id += 1;
};

const deleteTodo = () => {};
