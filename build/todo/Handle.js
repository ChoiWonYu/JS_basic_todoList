"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doneTodo = exports.addTodo = exports.removeTodo = void 0;
const ITodo_1 = require("./type/ITodo");
const Render_1 = require("./Render");
const store_1 = require("../store");
const removeTodo = (id) => {
    console.log(id);
    (0, store_1.setTodo)((0, store_1.getTodo)().filter((todo) => todo?.id !== id));
};
exports.removeTodo = removeTodo;
const addTodo = (value) => {
    if (!value)
        return null;
    const id = Date.now();
    const newTodo = {
        id,
        action: value,
        status: ITodo_1.TodoStatus.TODO,
    };
    (0, store_1.getTodo)().push(newTodo);
    (0, Render_1.createTodoElement)(newTodo);
    (0, Render_1.hideUnselectedTodo)();
};
exports.addTodo = addTodo;
const doneTodo = (id) => {
    const targetTodo = (0, store_1.getTodo)().filter((todo) => todo.id === id)[0];
    (0, exports.removeTodo)(id);
    const newTodo = {
        ...targetTodo,
        status: ITodo_1.TodoStatus.DONE,
    };
    (0, store_1.getTodo)().push(newTodo);
    (0, Render_1.createTodoElement)(targetTodo);
    (0, Render_1.hideUnselectedTodo)();
};
exports.doneTodo = doneTodo;
