import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id:1, 
            text: "Hello world"
        },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
//in redux toolkit we define the complete functionality and for each function have access of state & action
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            console.log(todo.text);
            
            if(todo) {todo.text = text;}
            console.log(todo.text);         
        }
    }
})

// state: gives the current state values & action.payload is what is being sent to the function at the time of calling
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer