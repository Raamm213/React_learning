import React, { useState } from "react";
import {Usetodocontext} from "../Context/Context";

function InputForm() {
    const [todo, setTodo] = useState('')
    const {AddTodo} = Usetodocontext()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return alert("enter any task")
        AddTodo({todo, complete: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className="flex justify-center items-center flex-row">
      <input
        type="text"
        placeholder="Enter your todo"
        className="w-full border border-black/10  px-3 outline-none duration-150 bg-slate-400 rounded-l-4xl py-1.5"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="px-5 py-1.5 bg-green-500 text-white shrink-0 cursor-pointer rounded-r-4xl" type="submit">Add</button>
    </form>
  );
}

export default InputForm;
