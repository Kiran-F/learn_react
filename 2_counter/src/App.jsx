import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15); //we used useState to avoid the lines of code for selecting the elements from DOM and updating them one by one.
  const addValue = () => {
    // counter++;
    setCounter(++counter);
  }
  const removeValue = () => {
    // counter--;
    setCounter(--counter);
  }
  return (
    <>
      <h1>Learning <span className="blue">React</span> day 3</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>

      <p>Counter value in footer: {counter}</p>
    </>
  )
}

export default App
