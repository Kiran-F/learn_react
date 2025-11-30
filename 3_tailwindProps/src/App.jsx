// import { useState } from 'react'
import './App.css'
import Card  from './components/card'

function App() {
  // let myObj = {
  //   username: "kiran",
  //   age:21
  // }
  // let newArr = [1,2,3];
  return (
    <>
      <h2 className='bg-sky-400 text-black rounded-2xl mb-3 py-3 hover:text-blue-200 hover:bg-gray-800'>Tailwind CSS</h2>
      <Card username="Mountainer.me" labelText="The first Adventure" imgSrc="https://plus.unsplash.com/premium_photo-1664300545826-2b1c30409ad4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=944" btnText="Click to visit" /> <br />
      <Card username="kiranfatima.dev" labelText="The second Hiking" imgSrc="https://plus.unsplash.com/premium_photo-1661833879387-1513bf753554?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869" btnText="Click to explore" />
      {/* what if i want to display differnt info and images on the cards-> use props */}
    </>
  )
}

export default App