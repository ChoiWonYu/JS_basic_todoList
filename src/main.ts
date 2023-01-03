import { getTodo, initialGetTodo, setTodo } from "./store.js";
import { addTodo } from "./todo/Handle.js";
import { initTodo } from "./todo/Render.js";
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput") as HTMLInputElement;

const onSubmit = (event: Event) => {
  event.preventDefault();
  addTodo(todoInput?.value);
  todoInput?.value && (todoInput.value = "");
};

todoForm?.addEventListener("submit", onSubmit);

if (getTodo().length === 0) {
  const storedTodoList = initialGetTodo();
  storedTodoList && setTodo(storedTodoList);
  initTodo();
}
