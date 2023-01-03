export const TODO_KEY = "TODO_KEY";
let TodoList = [];
export const storeTodo = (todo) => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todo));
};
export const initialGetTodo = () => {
    const returnTodoList = localStorage.getItem(TODO_KEY);
    if (returnTodoList) {
        return JSON.parse(returnTodoList);
    }
};
export const getTodo = () => {
    return TodoList;
};
export const setTodo = (newTodoList) => {
    TodoList = newTodoList;
    storeTodo(TodoList);
};
export const appendTodo = (newTodo) => {
    setTodo(TodoList.concat([newTodo]));
};
