import { ITodo, TodoStatus } from "./type/ITodo.js";
import {
  hideUnselectedTodo,
  createTodoElement,
  deleteTodoElement,
  changeHidden,
} from "./Render.js";
import { getTodo, setTodo, appendTodo } from "../store.js";
import { TEXT_ID } from "./type/consts.js";

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
    isUpdating: false,
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

export const updateTodo = (
  event: KeyboardEvent,
  id: number,
  updateInput: HTMLInputElement
) => {
  if (event.key === "Enter") {
    setTodo(
      getTodo().map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            action: updateInput.value,
          };
        return todo;
      })
    );
    const todo = document.getElementById(`${TEXT_ID}${id}`);
    changeHidden(id);
    todo && (todo.innerHTML = updateInput.value);
    console.log(updateInput.value);
    updateInput.value = "";
  }
};
