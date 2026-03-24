import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSliceCopy'

export const storeCopy = configureStore({
    reducer: todoReducer
})

// export const storeCopy = configureStore({
//     reducer:{
//         todo: todoReducer
//     } 
// })