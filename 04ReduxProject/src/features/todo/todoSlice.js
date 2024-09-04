import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: "Hello",
    }]
}

export const todoScile = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        },
    }
})
export const { addTodo, removeTodo } = todoScile.actions

export default todoScile.reducer

// createSlice function pass a object in it.
// elemnt of object name, intialState, reducer.
// reducer is object containing two function with their functionlity.
// both are arror function with (state,action) parameter.
// function name addtodo and removetodo.