import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='flex inset-x-0 justify-center mr-2 ml-2'>
        <p className='py-10 text-4xl font-bold font-mono text-center'>Background Changer</p>
      </div>
    <div className='fixed flex flex-wrap inset-x-0 justify-center bottom-10 px-4'>
     
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-4 rounded-xl'>
      <button className='outline-none px-4 py-1 rounded-xl text-black shadow-lg' onClick={()=>setColor("yellow")}
      style={{backgroundColor:"Yellow"}}>Yellow</button>
      <button className='outline-none px-4 py-1 rounded-xl text-black shadow-lg' onClick={()=>setColor("pink")}
      style={{backgroundColor:"pink"}}>Pink</button>
      <button className='px-4 py-1 rounded-xl text-black shadow-lg ' onClick={()=>setColor("white")}
      style={{backgroundColor:"white"}}>White</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("green")}
      style={{backgroundColor:"Green"}}>Green</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("red")} 
      style={{backgroundColor:"red"}}>Red</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("CadetBlue")}
      style={{backgroundColor:"cadetBlue"}}>CadetBlue</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("blue")}
      style={{backgroundColor:"blue"}}>Blue</button>
      <button className='px-4 py-1 rounded-xl text-black shadow-lg'onClick={()=>setColor("lavender")}
      style={{backgroundColor:"lavender"}}>Lavender</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("purple")}
      style={{backgroundColor:"purple"}}>Purple</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("grey")}
      style={{backgroundColor:"DarkGrey"}}>Gray</button>
      <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' onClick={()=>setColor("orange")}
      style={{backgroundColor:"Orange"}}>Orange</button>
      <button className='outline-none px-4 py-1 rounded-xl text-black shadow-lg' onClick={()=>setColor("cyan")}
      style={{backgroundColor:"cyan"}}>cyan</button>
      </div>
   
    </div>
    </div>
  )
}

export default App
