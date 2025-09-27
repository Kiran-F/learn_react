import { useState } from 'react'
import './App.css'
import "tailwindcss"

function App() {
  const [color, setColor] = useState("#222222")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-50 px-3 py-2 rounded-2xl'>
            <button onClick={() => setColor("red")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "red"}}>
              Red
            </button>

            <button onClick={() => setColor("olive")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "olive"}} >
              Olive
            </button>

            <button onClick={() => setColor("blue")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "blue"}} >
              Blue
            </button>

            <button onClick={() => setColor("yellow")} className="ouline-none px-4 py-2 rounded-full text-black cursor-pointer" style={{backgroundColor: "yellow"}} >
              Yellow
            </button>

            <button onClick={() => setColor("purple")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "purple"}} >
              Purple
            </button>

            <button onClick={() => setColor("fuchsia")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "fuchsia"}} >
              Fuchsia
            </button>

            <button onClick={() => setColor("teal")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "teal"}} >
              Teal
            </button>

            <button onClick={() => setColor("navy")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "navy"}} >
              Navy
            </button>

            <button onClick={() => setColor("maroon")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "maroon"}} >
              Maroon
            </button>

            <button onClick={() => setColor("deepskyblue")} className="ouline-none px-4 py-2 rounded-full text-white cursor-pointer" style={{backgroundColor: "deepskyblue"}} >
              Deep sky blue
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App