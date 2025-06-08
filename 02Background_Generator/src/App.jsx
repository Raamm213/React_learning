import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("cyan")

  return (
    <>
      <div className='w-screen h-screen ' style={{backgroundColor: color}}>
        <div className='h-15 w-full bg-white flex justify-center items-center'>
          <div className='bg-green-600 w-25 uppercase cursor-pointer text-center p-2 rounded-4xl m-4' onClick={() => setcolor("green")}>green</div>
          <div className='bg-blue-700 w-25 uppercase cursor-pointer text-center p-2 rounded-4xl m-4' onClick={() => setcolor("blue")}>blue</div>
          <div className=' w-25 uppercase cursor-pointer text-center p-2 rounded-4xl bg-indigo-400 m-4' onClick={() =>setcolor("indigo")}>indigo</div>
          <div className='bg-amber-400  w-25 uppercase cursor-pointer text-center p-2 rounded-4xl m-4' onClick={() => setcolor("yellow")}>yellow</div>
        </div>
      </div>
    </>
  )
}

export default App
