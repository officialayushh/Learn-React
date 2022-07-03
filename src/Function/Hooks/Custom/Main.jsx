import React, { useState } from 'react'
import UseTitle from './UseTitle';

function Main() {
    const [count,setCount] = useState(0);
    UseTitle(count);
  return (
    <>
    <div>Custom Hook</div>
    <button onClick={()=> setCount(count+1)}>Clicks</button>
    </>
  )
}

export default Main