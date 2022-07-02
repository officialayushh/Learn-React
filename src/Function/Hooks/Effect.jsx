import React, { useEffect, useState } from 'react'

function Effect() {
  const [count,setCount] = useState(1);
  useEffect(() => {
    console.log(count);
  })
  return (
    <div>
      <h1>Use Effect Hooks in React {count} </h1>
      <button onClick={() => setCount(count+1)}>  Update </button>
    </div>
  )
}

export default Effect