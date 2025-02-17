import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setcolor]=useState("red")

  return (
  <div className="w-full h-screen transition-all duration-200" 
  style={{backgroundColor:color}}></div>
  );
}

export default App
