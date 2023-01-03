"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTodo = exports.getTodo = exports.initialGetTodo = exports.storeTodo = exports.TODO_KEY = void 0;
exports.TODO_KEY = "TODO_KEY";
let TodoList = [];
const storeTodo = (todo) => {
    localStorage.setItem(exports.TODO_KEY, JSON.stringify(todo));
};
exports.storeTodo = storeTodo;
const initialGetTodo = () => {
    const returnTodoList = localStorage.getItem(exports.TODO_KEY);
    if (returnTodoList) {
        return JSON.parse(returnTodoList);
    }
};
exports.initialGetTodo = initialGetTodo;
const getTodo = () => {
    return TodoList;
};
exports.getTodo = getTodo;
const setTodo = (newTodoList) => {
    TodoList = newTodoList;
};
exports.setTodo = setTodo;
