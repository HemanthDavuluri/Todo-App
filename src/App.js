import React,{useState,useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';

function App() {
    const local_storage_key = "TodoList"
    
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(local_storage_key)); 
        if (storageTodos) {
            setTodos(storageTodos)
        }
    },[])

    useEffect(() => {
        localStorage.setItem(local_storage_key, JSON.stringify(todos));
    },[todos])

    function addTodo(todo) {
      setTodos([todo, ...todos]);
    }
  return (
    <div>
      <p>Todo App</p>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos}/>
    </div>
  );
}

export default App;
