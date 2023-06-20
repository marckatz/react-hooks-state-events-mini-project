import React, {Children} from "react";
import Task from "./Task";

function TaskList({tasks, selected, taskDeleter}) {
  const taskList = Children.toArray(tasks.filter(t => t.category === selected || selected === "All")
    .map(task => {
      return <Task task={task} taskDeleter={taskDeleter}/>
  }))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
