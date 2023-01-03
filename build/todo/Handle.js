import { storeTodo } from "../store";
let id = 1;
const setTodo = (TodoList, newTodoList) => {
    TodoList = newTodoList;
    storeTodo(TodoList);
};
const addTodo = (TodoList, action) => {
    const newTodo = {
        id,
        action,
        status: "TODO",
    };
    setTodo(TodoList, TodoList === null || TodoList === void 0 ? void 0 : TodoList.concat(newTodo));
    id += 1;
};
const deleteTodo = () => { };
