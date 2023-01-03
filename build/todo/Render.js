import { removeTodo, doneTodo } from "./Handle.js";
import { getTodo } from "../store.js";
const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect");
export const hideUnselectedTodo = () => {
    const Status = todoSelect.value;
    getTodo().forEach((todo) => {
        const targetElement = document.getElementById(`${todo.id}`);
        if (todo.status !== Status) {
            targetElement && (targetElement.hidden = true);
        }
        else
            targetElement && (targetElement.hidden = false);
    });
};
todoSelect === null || todoSelect === void 0 ? void 0 : todoSelect.addEventListener("change", hideUnselectedTodo);
export const createTodoElement = ({ id, action, status }) => {
    const todoContainer = document.createElement("li");
    todoContainer.id = String(id);
    todoContainer.classList.add(status);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => removeTodo(id));
    deleteBtn.innerText = "❌";
    action && (todoContainer.innerHTML = action);
    todoContainer.appendChild(deleteBtn);
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoContainer);
    if (status === "TODO")
        todoContainer.appendChild(createTodo(id));
};
export const deleteTodoElement = (id) => {
    const removeElement = document.getElementById(`${id}`);
    removeElement && (todoList === null || todoList === void 0 ? void 0 : todoList.removeChild(removeElement));
};
const createTodo = (id) => {
    const completeBtn = document.createElement("button");
    completeBtn.addEventListener("click", () => doneTodo(id));
    completeBtn.innerText = "✅";
    return completeBtn;
};
export const showTodo = () => {
    getTodo().forEach((todo) => {
        createTodoElement(todo);
    });
    hideUnselectedTodo();
};
