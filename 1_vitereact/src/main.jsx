import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
      <div>
        <p>This is the text in the funtion which is in the main.jsx.</p>
      </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google via anotherElement.</a>
)

//how objects are created from elements in react
const myName = "Kiran hoon mein";
const reactElement = createElement(
  'a', //tagName
  {href: 'https://google.com', target: '_blank'}, //properties
  'Click me to visit google.com via reactElement (rendering a react object) ', //the inner text to be displayed
  myName //if we want to add any variable and it's value.
)


createRoot(document.getElementById('root')).render(
    // reactElement
    // anotherElement
    // MyApp() //not recommended
    <App />
)