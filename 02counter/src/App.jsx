import { useState } from 'react'  // Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15
  let [counter, setCounter] = useState(15) //Create hooks


  // Create Function for Add Value and Never go to uppar 20
  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter+1)
      setCounter(prevCounter =>prevCounter+ 1) // Reapet add value
      setCounter(prevCounter =>prevCounter+ 1)
      setCounter(prevCounter =>prevCounter+ 1)
    }
  }

  //Create Function for Remove Value and never go in Negative Value
  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Dhanish Raj</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br /> <br />
      <button onClick={removevalue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
