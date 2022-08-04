import { useEffect, useRef, useState } from "react";
import {
  generateID,
  getTodoItems,
  removeTodoItem,
  setTodoItems,
  setTodoStatus,
} from "../helper";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(getTodoItems());
  const [todoListItems, setTodoListItems] = useState([]);

  useEffect(() => {
    let items = todoList.map((item, index) => (
      <TodoItem
        key={index}
        todo={item}
        onDelete={deleteHandler}
        onComplete={completeHandler}
        className={item.status === "complete" ? "completed-item" : ""}
      />
    ));

    setTodoListItems(items);
  }, [todoList]);

  const addTodoHandler = () => {
    let inputTask = inputRef.current.value;

    if (inputTask.trim().length === 0) return;

    const data = {
      id: generateID(),
      task: inputRef.current.value,
      status: "active",
    };

    setTodoItems(data);
    setTodoList(getTodoItems());
    inputRef.current.value = "";
  };

  const deleteHandler = (item) => {
    removeTodoItem(item);
    setTodoList(getTodoItems());
  };

  const completeHandler = (item) => {
    setTodoStatus(item);
    setTodoList(getTodoItems());
  };

  return (
    <div className="App" id="main">
      <h1>React Simple Todo</h1>
      <div className="input-wrapper">
        <input
          type="text"
          ref={inputRef}
          placeholder="Write your task here"
          minLength={1}
          maxLength={35}
        />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      {todoList.length > 0 && <ul className="todo-list">{todoListItems}</ul>}
    </div>
  );
}

export default App;
