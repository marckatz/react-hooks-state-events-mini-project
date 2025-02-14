import React from "react";

function Task({task, taskDeleter}) {
  const {category, text} = task
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=> taskDeleter(text)}>X</button>
    </div>
  );
}

export default Task;
