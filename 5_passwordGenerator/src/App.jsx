import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  //useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {//useCallback hook for optimization, so that it is stored in cache for frequent use
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopkrstuvwxyz';

    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }    
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => { //useEffect hook (on change on the dependencies, passwordGenerator is called.)
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  //ref hook
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 7) //this only selects the first three characters of password
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-5000 bg-gray-800'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-amber-50 text-orange-400'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='active:bg-black active:text-white outline-none bg-teal-600 hover:bg-teal-700 text-white px-3 py-0.5 shrink-0 cursor-pointer '>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-orange-400'>Length: ({length})</label>
          </div>

          <div className='flex items-center gap-x-1 text-orange-400'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className='ml-3'
              id='numberInput'
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className='ml-2'
              id='characterInput'
              onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}


export default App