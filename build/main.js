"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handle_1 = require("./todo/Handle");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const onSubmit = (event) => {
    event.preventDefault();
    (0, Handle_1.addTodo)(todoInput?.value);
    todoInput?.value && (todoInput.value = "");
};
todoForm?.addEventListener("submit", onSubmit);
