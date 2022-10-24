import Postmate from "postmate";
import { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [value, setValue] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(() => setValue(new Date()), 1000);
    const handshake = new Postmate.Model({})
    handshake.then((parent)=>{
      const { model } = parent as unknown as { model: { data: number[] } };
      console.log("Model Data:",model.data)
      parent.emit('app2Test','Hello From React')
    })

    return ()=>{
      clearInterval(interval);
    }
  },[])

  return (
    <div className='text-2xl font-semibold flex flex-col justify-center items-center h-screen'>
      Hello From React
      <div>
        <Clock value={value} />
      </div>
    </div>
  )
}

export default App
