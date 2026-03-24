// First configure the store
// Second step is to create reducers
// Export the functionalities written in reducer in slice

//store and reducers purely belongs to redux toolkit
//useSelector and useDispatch are from react (react's wireup to use redux)

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})