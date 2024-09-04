import { createContext, useContext } from "react";

export const TodosContext = createContext({
    todos: [{
        id: 1,
        todo: "Msg to Todo",
        completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodosContext)
}

export const TodosProvider = TodosContext.Provider

// createContext
// useTodo using useContext
// TodosContext.Provider