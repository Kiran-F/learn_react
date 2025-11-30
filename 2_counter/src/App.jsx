import { useState } from 'react'
import './App.css'

function App() {
  // a hook ahead
  let [counter, setCounter] = useState(10); //we used useState to avoid the lines of code for selecting the elements from DOM and updating them one by one.
  //the value will be 10 initially but will stay between 0 to 20
  const addValue = () => {
    if(counter > 19){
      setCounter(counter);
    }else{
      setCounter(++counter);
    }
  }
  const removeValue = () => {
    if(counter < 1){
      setCounter(counter);
    }else{
      setCounter(--counter);
    }
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