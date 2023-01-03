import { getTodo, initialGetTodo, setTodo } from "./store.js";
import { addTodo } from "./todo/Handle.js";
import { showTodo } from "./todo/Render.js";
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const storedTodoList = initialGetTodo();
const onSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
    (todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) && (todoInput.value = "");
};
todoForm === null || todoForm === void 0 ? void 0 : todoForm.addEventListener("submit", onSubmit);
if (getTodo().length === 0 && storedTodoList) {
    setTodo(storedTodoList);
    showTodo();
}
