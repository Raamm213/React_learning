import { useEffect, useState } from "react";
import "./App.css";

import { TodocontextProvider } from "./Context/Context.js";

import InputForm from "./Components/InputForm.jsx";

import TodoTemplate from "./Components/TodoTemplate.jsx";

function App() {
  const [Todo, setTodo] = useState([]);

  const AddTodo = (todo) => {
    setTodo((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const DeleteTodo = (id) => {
    setTodo((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const UpdateTodo = (id, todo) => {
    setTodo((prev) => {
      return prev.map((ele) => (ele.id === id ? todo : ele));
    });
  };

  const ToggleComplete = (id) => {
    setTodo((prev) => {
      return prev.map((ele) =>
        id === ele.id ? { ...ele, complete: !ele.complete } : ele
      );
    });
  };

  useEffect(()=>{
    const Todo = JSON.parse(localStorage.getItem("Todo"))
    if (Todo && Todo.length > 0){
      setTodo(Todo)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Todo",JSON.stringify(Todo))
  },[Todo])

  return (
    <TodocontextProvider
      value={{ Todo, AddTodo, DeleteTodo, UpdateTodo, ToggleComplete }}
    >
      <div className="bg-white min-h-screen py-8 flex justify-center items-center flex-row">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-gray-600">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <InputForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {Array.isArray(Todo) && Todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoTemplate todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodocontextProvider>
  );
}

export default App;
