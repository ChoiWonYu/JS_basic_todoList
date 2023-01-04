import { getTodo, initialGetTodo, setTodo } from "./store.js";
import { addTodo } from "./todo/Handle.js";
import { initTodo } from "./todo/Render.js";
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const onSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
    (todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) && (todoInput.value = "");
};
todoForm === null || todoForm === void 0 ? void 0 : todoForm.addEventListener("submit", onSubmit);
if (getTodo().length === 0) {
    const storedTodoList = initialGetTodo();
    storedTodoList && setTodo(storedTodoList);
    initTodo();
}
