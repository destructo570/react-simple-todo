import React from "react";

function TodoItem(props) {
  const classes = `todo-item ${props.className ? props.className : ""}`;
  return (
    <li className={classes}>
      {props.todo.task}
      <div className="todo-actions">
        <button
          className="btn btn-complete"
          onClick={props.onComplete.bind(null, props.todo)}
        >
          Complete
        </button>
        <button
          className="btn btn-delete"
          onClick={props.onDelete.bind(null, props.todo)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
