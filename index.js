const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoSelect = document.getElementById("todoSelect");

let todoArr = [];
let id = 0;

const addTodo = (todo) => {
  todoArr = [
    ...todoArr,
    {
      id: id++,
      action: todo,
      status: "Todo",
    },
  ];
};
const deleteTodo = (id) => {
  todoArr = todoArr.filter((todo) => todo.id !== id);
  showTodo();
};
const doneTodo = (doneTodo) => {
  newTodo = {
    ...doneTodo,
    status: "Done",
  };
  todoArr = todoArr.filter((todo) => todo.id !== doneTodo.id);
  todoArr = [...todoArr, newTodo];
  showTodo();
};

const showTodo = () => {
  const select = todoSelect.value;
  todoList.innerHTML = null;
  todoArr.forEach((todo) => {
    if (select == todo.status) {
      const todoAction = document.createElement("li");
      const todoContainer = document.createElement("div");
      const DeleteBtn = document.createElement("button");

      DeleteBtn.addEventListener("click", () => deleteTodo(todo.id));
      DeleteBtn.innerHTML = "❌";
      todoContainer.innerHTML = todo.action;

      if (select == "Todo") {
        const todoDoneBtn = document.createElement("button");
        todoDoneBtn.addEventListener("click", () => doneTodo(todo));
        todoDoneBtn.innerHTML = "✅";
        todoContainer.appendChild(todoDoneBtn);
      }

      todoContainer.appendChild(DeleteBtn);
      todoAction.appendChild(todoContainer);

      todoList.appendChild(todoAction);
    }
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
  showTodo();
};
const onSelectChange = (e) => {
  showTodo();
};

todoSelect.addEventListener("change", onSelectChange);
todoForm.addEventListener("submit", onSubmit);
