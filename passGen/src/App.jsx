import { use, useCallback, useEffect, useRef, useState } from 'react'



function App() {
const [length,setlength]=useState(8);
const [charAllowed,setCharAllowed]=useState(false);
const [numberAllowed,setNumAllowed]=useState(false);
const [password,setpass]=useState("");
//ref hook

const passwordRef=useRef(null);
const passGenn=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(charAllowed) str+="~`!@#$$%^&*/_{}()[]";
  if(numberAllowed) str+="0123456789";
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random() *str.length+1);
    pass+=str.charAt(char);
  }
  setpass(pass);
},[length,charAllowed,numberAllowed,setpass])

 const copyPassword=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
 },[password])

  useEffect(()=>{
    passGenn();
  },[length,charAllowed,numberAllowed,passGenn]);
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
    bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mx-2 mb-2">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-gray-800"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPassword}
        className='outline-none  bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 '>
          <input type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e)=>{setlength(e.target.value)}} />
          <label>Length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAllowed}
          id="numinput"
          onChange={()=>{
            setNumAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="numinput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charAllowed}
          id="charinput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="charinput">Characters</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
