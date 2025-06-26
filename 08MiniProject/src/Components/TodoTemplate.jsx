import React, { useState } from "react";
import { Usetodocontext } from "../Context/Context";

function TodoTemplate({ todo }) {

  const [todomsg, setTodomsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const {DeleteTodo, UpdateTodo, ToggleComplete} = Usetodocontext()

  const editTodo = () => {
    UpdateTodo(todo.id,{...todo,todo:todomsg})
    setIsTodoEditable(false)
  }

  const togglecomplete = () => {
    ToggleComplete(todo.id)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-green-500" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={togglecomplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.complete) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((e) => !e);
        }}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button 
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => DeleteTodo(todo.id)}
      >❌</button>
    </div>
  );
}

export default TodoTemplate;
