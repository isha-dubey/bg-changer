import { useState } from 'react'
import './App.css'

function App() {
 const [color , setcolor] = useState('turquoise') ;
 
  return (
    <>
    <div className=' h-dvh flex justify-center items-center flex-wrap gap-4  '  style= {{backgroundColor: color}}>
      <button className=' border-4 p-3 border-black rounded-lg bg-rose-400 ' onClick={() => setcolor('pink')}>Pink</button>
      <button className=' border-4 p-3 border-black rounded-lg bg-green-200 '  onClick={() => setcolor('green')}>Green</button>
      <button className=' border-4 p-3 border-black rounded-lg bg-blue-200 '  onClick={() => setcolor('aqua')}>Blue</button>
      </div>
    </>
  )
}

export default App
