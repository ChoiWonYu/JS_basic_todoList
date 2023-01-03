import { ITodo, TodoStatus } from "./todo/type/ITodo";

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById(
  "todoInput"
) as HTMLInputElement | null;
const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect") as HTMLSelectElement;

let TodoList: ITodo[] = [];
const distribute = () => {
  const Status = todoSelect.value;
  TodoList.forEach((todo) => {
    const targetElement = document.getElementById(`${todo.id}`);

    if (todo.status !== Status) {
      targetElement && (targetElement.hidden = true);
    } else targetElement && (targetElement.hidden = false);
  });
};

const remove = (id: number) => {
  console.log(id);
  TodoList = TodoList.filter((todo) => todo?.id !== id);
  const removeElement = document.getElementById(`${id}`);
  removeElement && todoList?.removeChild(removeElement);
  distribute();
};
const complete = (id: number) => {
  const targetTodo = TodoList.filter((todo) => todo.id === id)[0];
  remove(id);
  TodoList.push({
    ...targetTodo,
    status: "DONE",
  });
  console.log(TodoList);
  const todoContainer = document.createElement("li");
  todoContainer.id = String(id);
  todoContainer.classList.add("DONE");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", () => remove(id));
  console.log(deleteBtn);
  todoContainer.innerText = targetTodo.action;
  todoContainer.appendChild(deleteBtn);
  console.log(todoContainer);
  todoList?.appendChild(todoContainer);
  distribute();
};

const addTodo = (TodoList: ITodo[], value: string | undefined) => {
  if (!value) return null;
  const id = Date.now();
  const newTodo: ITodo = {
    id,
    action: value,
    status: "TODO",
  };
  TodoList.push(newTodo);

  const todoContainer = document.createElement("li");
  todoContainer.id = String(id);
  todoContainer.classList.add("TODO");
  const deleteBtn = document.createElement("button");
  const completeBtn = document.createElement("button");

  deleteBtn.addEventListener("click", () => remove(id));
  deleteBtn.innerText = "❌";
  completeBtn.addEventListener("click", () => complete(id));
  completeBtn.innerText = "✅";

  value && (todoContainer.innerHTML = value);
  todoContainer.appendChild(deleteBtn);
  todoContainer.appendChild(completeBtn);

  todoList?.appendChild(todoContainer);
  distribute();
};

const onSubmit = (event: Event) => {
  event.preventDefault();
  console.log(todoInput?.value);
  addTodo(TodoList, todoInput?.value);
  todoInput?.value && (todoInput.value = "");
};

todoForm?.addEventListener("submit", onSubmit);
todoSelect?.addEventListener("change", distribute);
// todoSelect?.addEventListener('change',onSelectChange);
