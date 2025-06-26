import { createContext,useContext } from "react";


export const Todocontext = createContext({
    Todo : [{
        id:0,
        todo:"message",
        complete: false,
    }],
    AddTodo : () => {},
    DeleteTodo : () => {},
    UpdateTodo : () => {},
    ToggleComplete : () => {},
});

export const TodocontextProvider = Todocontext.Provider

export const Usetodocontext = () => useContext(Todocontext)
