import { useState } from 'react'
import './App.css'

function App() {
    const [count, setcount] = useState(0)

    const inc = () =>{
      setcount(count + 1)
    }

    const dec = () => {
      if (count === 0){
        alert("negative numbers not alowed!!!")
        return
      }
      setcount(count - 1)
    }

    const reset = () =>{
      setcount(0)
    }

  return (
    <>
    <div className='bg-gray-600 w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='py-7 text-7xl text-blue-300'>{count}</h1>
      <button onClick={inc} className='bg-cyan-600 m-5 rounded-4xl h-14 w-50 shadow-2xl/50 cursor-pointer focus:outline-4 focus:outline-offset-3 focus:outline-cyan-600 active:bg-cyan-500'>Increment</button>
      <button onClick={dec} className='bg-blue-300 mb-5 w-50 h-14 rounded-4xl shadow-2xl/50 cursor-pointer focus:outline-4 focus:outline-offset-3 focus:outline-blue-300  active:bg-blue-200'>Decrement</button>
      <button onClick={reset} className='bg-red-500 w-40 h-11 rounded-4xl uppercase shadow-2xl/50 cursor-pointer focus:outline-4 focus:outline-offset-3 focus:outline-red-500  active:bg-red-400' >reset</button>
    </div>
    </>
  )
}

export default App
