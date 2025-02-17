import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full fixed inset-0 h-screen transition-all duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl' >
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-3 rounded-full text-white transitions-all  duration-300 shadow-lg  ease-in-out border-3 border-transparent  transform hover:shadow-2xl hover:-translate-y-3  hover:scale-110 active:border-red-300 '
          style={{backgroundColor:"red"}}>RED</button>
           <button onClick={()=>setColor("blue")}
            className='outline-none px-4 py-3 rounded-full text-white transitions-all  duration-300 shadow-lg  ease-in-out border-3 border-transparent  transform hover:shadow-2xl hover:-translate-y-3  hover:scale-110 active:border-blue-300'
          style={{backgroundColor:"Blue"}}>Blue</button>
           <button onClick={()=>setColor("Pink")}
           className='outline-none px-4 py-3 rounded-full text-white transitions-all  duration-300 shadow-lg  ease-in-out border-3 border-transparent  transform hover:shadow-2xl hover:-translate-y-3  hover:scale-110 active:border-pink-300'
          style={{backgroundColor:"Pink"}}>Pink</button>
           <button onClick={()=>setColor("grey")}
            className='outline-none px-4 py-3 rounded-full text-white transitions-all  duration-300 shadow-lg  ease-in-out border-3 border-transparent  transform hover:shadow-2xl hover:-translate-y-3  hover:scale-110 active:border-grey-300'
          style={{backgroundColor:"Grey"}}>Grey</button>
         

        </div>

      </div>
    </div>
  )
}

export default App
