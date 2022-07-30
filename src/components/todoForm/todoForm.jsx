import React, { useState } from 'react'
import './todoForm.css'

function TodoForm(props) {
  const [value, setValue] = React.useState("");

  //When we detect a change in our input field 
  // we want to update our input field's value
  function handleChange(event) {
    console.log("event target: ", event.target.value)
    setValue(event.target.value)
  }

  //When we detect a submission, using the enter key
  // we want to take the input fields value and send it
  //to it's parent
  function handleSubmit(event) {
    event.preventDefault()
    props.addTodo(value)
    setValue("")
  }

  return (
    // Take an item, and add it to our Todo List
    <form onSubmit={handleSubmit}>
      <input 
        type="Text" 
        placeholder="Enter a todo"
        onChange={handleChange}
        value={value}
      />
    </form>
  )
}

export default TodoForm 