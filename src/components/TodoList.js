import React,{useState} from 'react'

function TodoList({ todos }) {
    let todoList = todos;
   
    
    return (
        <div>
            {todoList.map((todo) => {
            return <li key={todo.todo.id}>{todo.todo.task}</li>;
          })}
        </div>
    )
}

export default TodoList
