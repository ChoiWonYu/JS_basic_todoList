import { addTodo } from "./todo/Handle";
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById(
  "todoInput"
) as HTMLInputElement | null;

const onSubmit = (event: Event) => {
  event.preventDefault();
  addTodo(todoInput?.value);
  todoInput?.value && (todoInput.value = "");
};

todoForm?.addEventListener("submit", onSubmit);
