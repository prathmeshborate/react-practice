import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //counter is variable and setCounter is function

  const addValue = () => {
    
    /* setCounter(counter + 1) this is for 
    adding for only once even if you duplicate
    this it'll add 1 to counter inly once coz 
    hoook sends work in batches and duplicate 
    batches are neglected. fiber gains more 
    control on batches, and diffing algorithm
     also */

    setCounter(counter => counter + 1) // we are passing arrow function here
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  const substractValue = () => {
    setCounter(counter - 1)
  }

  return (
  <>
  <h1>Chai aur react</h1>
  <h2>Counter Value: {counter}</h2>

  <button
  onClick={addValue}
  disabled = {counter >= 20}
  >Increase</button>
  <br/>
  <button
  onClick={substractValue}
  disabled = {counter <= 0}
  >Decrease</button>
  </>
  )
}

export default App
