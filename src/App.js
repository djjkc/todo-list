import React from 'react';
import './App.css';
import TodoItem from './components/todoItem/todoItem'
import TodoForm from './components/todoForm/todoForm'

function App() {
  // Our list of todo items and a function to update them
  // const [todos, setTodos] = React.useState([
  //   "Eat Dinner",
  //   "Finish SheCodes",
  //   "Have a shower"
  // ])

  const [todos, setTodos] = React.useState([
    { text: "Eat Dinner", isComplete: false },
    { text: "Finish SheCode", isComplete: false },
    { text: "Have a shower", isComplete: false }
  ]);

function completeTodo(index) {
  const newTodos = [...todos]
  newTodos[index].isComplete = true;
  setTodos(newTodos);
}


  // This will call our setTodo function, 
  // to update our list of todos
  //Define a function which will add a new 
  // provided todo to our list of todos in state
  function addTodo(text) {
    // We use spread syntax here to add our 
    // new todo to our list of old todos
    // Add todo to state:
    setTodos([...todos, { text}])
  }


  // Our regular HTML with ReactComponents
  // We know which element is React because
  // it starts with a capital
  
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
  <div className="app">
  <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => (
    <TodoItem
    todo={todo}
    index={index}
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    />
  ))}
  <TodoForm addTodo={addTodo} />
  </div>
  </div>
);
}

export default App;
