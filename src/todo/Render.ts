import { ITodo } from "./type/ITodo";
import { removeTodo, doneTodo } from "./Handle";
import { getTodo } from "../store";
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

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", () => removeTodo(id));
  deleteBtn.innerText = "❌";

  action && (todoContainer.innerHTML = action);
  todoContainer.appendChild(deleteBtn);
  todoList?.appendChild(todoContainer);

  if (status === "TODO") todoContainer.appendChild(createTodo(id));
};

export const deleteTodoElement = (id: number) => {
  const removeElement = document.getElementById(`${id}`);
  removeElement && todoList?.removeChild(removeElement);
};

const createTodo = (id: number) => {
  const completeBtn = document.createElement("button");
  completeBtn.addEventListener("click", () => doneTodo(id));
  completeBtn.innerText = "✅";

  return completeBtn;
};
