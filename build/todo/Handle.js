import { TodoStatus } from "./type/ITodo.js";
import { hideUnselectedTodo, createTodoElement, deleteTodoElement, } from "./Render.js";
import { getTodo, setTodo, appendTodo } from "../store.js";
export const removeTodo = (id) => {
    setTodo(getTodo().filter((todo) => (todo === null || todo === void 0 ? void 0 : todo.id) !== id));
    deleteTodoElement(id);
};
export const addTodo = (value) => {
    if (!value)
        return null;
    const id = Date.now();
    const newTodo = {
        id,
        action: value,
        status: TodoStatus.TODO,
    };
    appendTodo(newTodo);
    createTodoElement(newTodo);
    hideUnselectedTodo();
};
export const doneTodo = (id) => {
    const targetTodo = getTodo().filter((todo) => todo.id === id)[0];
    removeTodo(id);
    const newTodo = Object.assign(Object.assign({}, targetTodo), { status: TodoStatus.DONE });
    appendTodo(newTodo);
    createTodoElement(newTodo);
    hideUnselectedTodo();
};
