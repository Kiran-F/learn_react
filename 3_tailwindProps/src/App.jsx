import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: "kiran",
    age:21
  }
  let newArr = [1,2,3];
  return (
    <>
      <h2 className='bg-sky-400 text-black rounded-2xl mb-3 py-3 hover:text-blue-200 hover:bg-gray-800'>Tailwind CSS</h2>
      <Card username="chai aur code" labelText="The first card" btnText="Click to visit" /> <br />
      <Card username="kiranfatima.dev" labelText="The second card" btnText="Click to explore" />
      {/* what if i want to display differnt info and images on the cards: use props */}
    </>
  )
}

export default App
