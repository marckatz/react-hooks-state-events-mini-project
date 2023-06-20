import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function removeTask(taskText){
    setTasks((currentTasks) => currentTasks.filter(t => t.text !== taskText))
  }

  function addTask(task){
    setTasks((currentTasks) => [...currentTasks, task])
  }

  function makeSelected(s){
    setSelected(s)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={makeSelected}/>
      <NewTaskForm categories={CATEGORIES} taskAdder={addTask}/>
      <TaskList tasks={tasks} selected={selected} taskDeleter={removeTask}/>
    </div>
  );
}

export default App;
