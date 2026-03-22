import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo({ input, setInput, editId, setEditId }) {

    // const[input, setInput] = useState('');
    const dispatch = useDispatch();

//dispatch: uses reducer to make changes in store's values

    // const addTodoHandler = (e) => {
    //     e.preventDefault();
    //     dispatch(addTodo(input));
    //     setInput('');
    // }

    const addTodoHandler = (e) => {
    e.preventDefault();

    if (editId) {
        dispatch(updateTodo({ id: editId, text: input }));
        setEditId(null); // exit edit mode
    } else {
        dispatch(addTodo(input));
    }

    setInput('');
}

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        {editId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo