import React, {Children, useState} from "react";

function NewTaskForm({categories, taskAdder}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const options = Children.toArray(categories.filter(c => c != "All").map(c => {
    return <option>{c}</option>
  }))

  function handleSubmit(e){
    e.preventDefault()
    taskAdder({category, text})
    setText('')
    setCategory('')
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  function handleTextChange(e){
    setText(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
