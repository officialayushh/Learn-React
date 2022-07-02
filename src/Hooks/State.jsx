import React, { useState } from 'react'

function State() {
  const [count,setCount] = useState(0);
  const handleDec = () => {
    if(count>0){
      setCount(count-1);
    }else{
      setCount(0);
      alert("Not Possible");
    }
  }
  return (
    <div>
      {count}
      <button onClick={()=> {setCount(count+1)}}>Incre</button>
      <button onClick={handleDec}>Decre</button>
    </div>
  )
}

export default State