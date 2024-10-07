import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwrodCopy = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (specialAllowed) str += "~!@#$%^&*()_-[]{}+="

    for (let i = 1; i <= length; i++){
      let charNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charNum)

    }

    setPassword(pass)

  }, [length, numberAllowed, specialAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwrodCopy.current?.select();
    // passwrodCopy.current?.setSelectionRange(0,3) this will limit the range of copy
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed, specialAllowed, passwordGenerator])
  // useEffect used to trigger a function on change in any value passes in array
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='Password'
        readOnly
        ref={passwrodCopy}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 
             hover:bg-blue-800 hover:scale-105 
             active:bg-blue-900 active:scale-95 
             transition duration-200 ease-in-ou'>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='Fflex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
              // this function filps the prevvious value
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={specialAllowed}
            id='specialInput'
            onChange={() => {
              setSpecialAllowed((prev) => !prev)
              // this function filps the prevvious value
            }} />
            <label>Symbols</label>
          </div>
      </div>
      </div>
      
    </>
  )
}

export default App
