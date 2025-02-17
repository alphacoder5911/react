import { useState } from 'react'//hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//usestate will help u reflect changes on screen without which the value on the screen will not be incremented 
function App() {
 let [counter,setCounter]=useState(15)
 // use state will give two values one is the counter and setCounter will control counter and its a method 
 //now as and when u update counter(increase or decrease is presseed ) setCounter will do the job and no need to 
 //explicitly write dom statements and functions to increment the value , all over the ui the value of particular wil be changed 
 
  // var counter=5
  const AddValue=()=>{
     counter=counter+1;// place the incremented in setCounter below
     setCounter(counter)//set counter bolta hai ki bhai bata iss counter mei nayi value kaunsa daalu 😂😂
     //setCounter ko koi dusra naam bhi de sakhte hai like shreyas counter blah blah 
  }
  
  const setZero=()=>{
    counter=0;
    setCounter(counter)
  }

 const DeleteValue=()=>{
  try{
    //Assignment 
    if(counter<=0){
      alert("Counter cant go negative")
      throw new Error("Cant go in negative");
    }
    else{
      counter=counter-1;
      setCounter(counter)
    }
  }catch{
    console.log("Cant go in negative")
  }
 }

  return (

    <>
    <h2>no of goals:{counter}</h2>
     <h1>Chai aur react </h1>
     <h2>Counter value : {counter}</h2>
     <button
      onClick={AddValue}
     >Increase Value</button>
     <br ></br>
     <button
      onClick={DeleteValue}>Decrease Value</button> 
     <br></br>
     <h2>{counter}</h2>
     <button
     onClick={setZero}>Set Zero</button>
    </>
  )
}

export default App
