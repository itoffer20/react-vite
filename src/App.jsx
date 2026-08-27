import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let firstName = 'John';
  let lastName = 'Doe';
  const [count, setCount] = useState(0)

  return (
    <>
      
    <h1>To do list for {firstName} </h1> 
      <ul>
        <li>Learn React </li>
        <li>Learn Vite</li>
        <li>Learn React Router</li>
      </ul>
    </>
  )
}


export default App