import React from 'react';
import './todoItem.css'

// function ToDoItem(props) {
//     // eg. const { todo } = props;
//     // eg. const todo = props.todo; 
//     // for both examples above in <div> below just use { todo }
//     return (
//         <div>{props.todo}</div>
//     )
// }

function TodoItem(props) {
    
    const { todo, index, completeTodo, removeTodo } = props;
    console.log (todo)
    return (
    <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
        {todo.text}
        <div>
            <button onClick={() => { completeTodo (index) }}>Mark Complete</button>
            <button onClick={() => { removeTodo (index) }}>x</button>
        </div>
    </div>
    );
}


export default TodoItem