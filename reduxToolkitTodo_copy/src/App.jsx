import { useState } from "react";
import AddTodo from "./components/addTodo";
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  return (
    <>
      <AddTodo 
        input={input}
        setInput={setInput}
        editId={editId}
        setEditId={setEditId}
      />

      <Todos 
        setInput={setInput}
        setEditId={setEditId}
      />
    </>
  );
}

export default App;