const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todoArr = [];
let id = 0;

const addTodo = (todo) => {
  todoArr = [
    ...todoArr,
    {
      id: id++,
      action: todo,
    },
  ];
};
const deleteTodo = (id) => {
  todoArr = todoArr.filter((todo) => todo.id !== id);
  showTodo();
};

const showTodo = () => {
  todoList.innerHTML = null;
  todoArr.forEach((todo) => {
    const todoAction = document.createElement("li");
    const todoContainer = document.createElement("div");
    const todoDoneBtn = document.createElement("button");

    todoDoneBtn.addEventListener("click", () => deleteTodo(todo.id));
    todoDoneBtn.innerHTML = "✅";
    todoContainer.innerHTML = todo.action;
    todoContainer.appendChild(todoDoneBtn);
    todoAction.appendChild(todoContainer);

    todoList.appendChild(todoAction);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
  showTodo();
};

todoForm.addEventListener("submit", onSubmit);
