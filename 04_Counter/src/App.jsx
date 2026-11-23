import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(15)  //hooks

//  let counter =5;
function add(){
  counter+=1;
  console.log("onclick",counter);
  if(counter<30)
  setCounter(counter);
}

function remove(){
  if(counter>0)
  setCounter(counter-1);
  
}

  return (
    <>
   <h1>call me habi</h1>
   <h2>Counter value:{counter}</h2>
   <button onClick={add}>Add value{counter}</button>
   <br/>
   <button onClick={remove}>remove value{counter}</button>
    </>
  )
}

export default App
