import { useState } from 'react'
import './App.css'
import List from './List.jsx'

function App() {
  let name = 'Kul Raj Sharma';

  return (
    <>
    <h1>To do list for {name} </h1> 
    <List />
    </>
  )
}

export default App
