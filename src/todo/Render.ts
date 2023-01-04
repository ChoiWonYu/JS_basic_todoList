import { ITodo } from "./type/ITodo";
import { removeTodo, doneTodo, updateTodo } from "./Handle";
import { getTodo } from "../store";
import { UPDATE_ID, TEXT_ID } from "./type/consts";

const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect") as HTMLSelectElement;

export const hideUnselectedTodo = () => {
  const Status = todoSelect.value;
  getTodo().forEach((todo) => {
    const targetElement = document.getElementById(`${todo.id}`);

    if (todo.status !== Status) {
      targetElement && (targetElement.hidden = true);
    } else targetElement && (targetElement.hidden = false);
  });
};

todoSelect?.addEventListener("change", hideUnselectedTodo);

export const createTodoElement = ({ id, action, status }: ITodo) => {
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
  todoList?.appendChild(todoContainer);

  if (status === "TODO") createTodo(id, todoContainer);
};

export const deleteTodoElement = (id: number) => {
  const removeElement = document.getElementById(`${id}`);
  removeElement && todoList?.removeChild(removeElement);
};

const createTodo = (id: number, todoContainer: HTMLElement) => {
  const completeBtn = document.createElement("button");
  completeBtn.addEventListener("click", () => doneTodo(id));
  completeBtn.innerText = "✅";

  const updateBtn = document.createElement("button");
  updateBtn.addEventListener("click", () => changeHidden(id));
  updateBtn.innerHTML = "✏️";

  const updateInput = document.createElement("input");
  updateInput.id = `${UPDATE_ID}${id}`;
  updateInput.addEventListener("keypress", function (this, event) {
    updateTodo(event, id, this);
  });
  updateInput.hidden = true;

  todoContainer.appendChild(completeBtn);
  todoContainer.appendChild(updateBtn);
  todoContainer.appendChild(updateInput);
};

export const changeHidden = (id: number) => {
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
