export const getTodoItems = () => {
  return JSON.parse(localStorage.getItem("todo"));
};

export const setTodoItems = (item) => {
  let todos = getTodoItems();

  if (todos === null) todos = [];
  todos.push(item);
  return localStorage.setItem("todo", JSON.stringify(todos));
};

export const setTodoStatus = (item) => {
  let todos = getTodoItems();

  todos.forEach((element) => {
    if (element.id === item.id) {
      element.status = element.status === "active" ? "complete" : "active";
    }
  });

  return localStorage.setItem("todo", JSON.stringify(todos));
};

export const removeTodoItem = (item) => {
  let todos = getTodoItems();
  if (todos === null) return;
  todos = todos.filter((todo) => todo.id !== item.id);
  return localStorage.setItem("todo", JSON.stringify(todos));
};

export const clearTodoItems = () => {
  localStorage.removeItem("todo");
};

export const generateID = () => {
  return Math.floor(Math.random() * 1000) + 1;
};
