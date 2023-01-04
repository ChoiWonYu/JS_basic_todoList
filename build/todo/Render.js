import { removeTodo, doneTodo, updateTodo } from "./Handle.js";
import { getTodo } from "../store.js";
import { UPDATE_ID, TEXT_ID } from "./type/consts.js";
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
    const Action = document.createElement("span");
    Action.id = `${TEXT_ID}${id}`;
    Action.innerText = action;
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => removeTodo(id));
    deleteBtn.innerText = "❌";
    todoContainer.appendChild(Action);
    todoContainer.appendChild(deleteBtn);
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoContainer);
    if (status === "TODO")
        createTodo(id, todoContainer);
};
export const deleteTodoElement = (id) => {
    const removeElement = document.getElementById(`${id}`);
    removeElement && (todoList === null || todoList === void 0 ? void 0 : todoList.removeChild(removeElement));
};
const createTodo = (id, todoContainer) => {
    const completeBtn = document.createElement("button");
    completeBtn.addEventListener("click", () => doneTodo(id));
    completeBtn.innerText = "✅";
    const updateBtn = document.createElement("button");
    updateBtn.addEventListener("click", () => changeHidden(id));
    updateBtn.innerHTML = "✏️";
    const updateInput = document.createElement("input");
    updateInput.id = `${UPDATE_ID}${id}`;
    updateInput.addEventListener("keypress", function (event) {
        updateTodo(event, id, this);
    });
    updateInput.hidden = true;
    todoContainer.appendChild(completeBtn);
    todoContainer.appendChild(updateBtn);
    todoContainer.appendChild(updateInput);
};
export const changeHidden = (id) => {
    const targetText = document.getElementById(`${TEXT_ID}${id}`);
    const targetInput = document.getElementById(`${UPDATE_ID}${id}`);
    targetText && (targetText.hidden = !targetText.hidden);
    targetInput && (targetInput.hidden = !targetInput.hidden);
};
export const initTodo = () => {
    getTodo().forEach((todo) => {
        createTodoElement(todo);
    });
    hideUnselectedTodo();
};
