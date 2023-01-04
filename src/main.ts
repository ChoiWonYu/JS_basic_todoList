import { getTodo, initialGetTodo, setTodo } from "./store";
import { addTodo } from "./todo/Handle";
import { initTodo } from "./todo/Render";
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
