import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  let [todo, setTodo] = useState({
    id: "",
    task: "",
    status: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const submit = () => {
    //console.log(todo);
      addTodo({ todo });
  };

  const task = (e) => {
    setTodo({ ...todo, task: e.target.value ,id:uuidv4()});
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={task} name="task" type="text" value={todo.task}></input>
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
