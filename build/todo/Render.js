"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoElement = exports.createTodoElement = exports.hideUnselectedTodo = void 0;
const Handle_1 = require("./Handle");
const store_1 = require("../store");
const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect");
const hideUnselectedTodo = () => {
    const Status = todoSelect.value;
    (0, store_1.getTodo)().forEach((todo) => {
        const targetElement = document.getElementById(`${todo.id}`);
        if (todo.status !== Status) {
            targetElement && (targetElement.hidden = true);
        }
        else
            targetElement && (targetElement.hidden = false);
    });
};
exports.hideUnselectedTodo = hideUnselectedTodo;
todoSelect?.addEventListener("change", exports.hideUnselectedTodo);
const createTodoElement = ({ id, action, status }) => {
    const todoContainer = document.createElement("li");
    todoContainer.id = String(id);
    todoContainer.classList.add(status);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => (0, Handle_1.removeTodo)(id));
    deleteBtn.innerText = "❌";
    action && (todoContainer.innerHTML = action);
    todoContainer.appendChild(deleteBtn);
    todoList?.appendChild(todoContainer);
    if (status === "TODO")
        todoContainer.appendChild(createTodo(id));
};
exports.createTodoElement = createTodoElement;
const deleteTodoElement = (id) => {
    const removeElement = document.getElementById(`${id}`);
    removeElement && todoList?.removeChild(removeElement);
};
exports.deleteTodoElement = deleteTodoElement;
const createTodo = (id) => {
    const completeBtn = document.createElement("button");
    completeBtn.addEventListener("click", () => (0, Handle_1.doneTodo)(id));
    completeBtn.innerText = "✅";
    return completeBtn;
};
