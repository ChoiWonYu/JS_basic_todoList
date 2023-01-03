const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect");
let TodoList = [];
const distribute = () => {
  const Status = todoSelect.value;
  TodoList.forEach((todo) => {
    const targetElement = document.getElementById(`${todo.id}`);
    if (todo.status !== Status) {
      targetElement && (targetElement.hidden = true);
    } else targetElement && (targetElement.hidden = false);
  });
};
const remove = (id) => {
  console.log(id);
  TodoList = TodoList.filter(
    (todo) => (todo === null || todo === void 0 ? void 0 : todo.id) !== id
  );
  const removeElement = document.getElementById(`${id}`);
  removeElement &&
    (todoList === null || todoList === void 0
      ? void 0
      : todoList.removeChild(removeElement));
  distribute();
};
const complete = (id) => {
  const targetTodo = TodoList.filter((todo) => todo.id === id)[0];
  remove(id);
  TodoList.push(
    Object.assign(Object.assign({}, targetTodo), { status: "DONE" })
  );
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
  todoList === null || todoList === void 0
    ? void 0
    : todoList.appendChild(todoContainer);
  distribute();
};
const addTodo = (TodoList, value) => {
  if (!value) return null;
  const id = Date.now();
  const newTodo = {
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
  todoList === null || todoList === void 0
    ? void 0
    : todoList.appendChild(todoContainer);
  distribute();
};
const onSubmit = (event) => {
  event.preventDefault();
  console.log(
    todoInput === null || todoInput === void 0 ? void 0 : todoInput.value
  );
  addTodo(
    TodoList,
    todoInput === null || todoInput === void 0 ? void 0 : todoInput.value
  );
  (todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) &&
    (todoInput.value = "");
};
todoForm === null || todoForm === void 0
  ? void 0
  : todoForm.addEventListener("submit", onSubmit);
todoSelect === null || todoSelect === void 0
  ? void 0
  : todoSelect.addEventListener("change", distribute);
// todoSelect?.addEventListener('change',onSelectChange);
