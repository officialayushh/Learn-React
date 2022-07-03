import React, { useState } from 'react'
import Home from './Home';
// Memo With Components
function Memo() {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);
  return (
    <div>
      Memo {count}
      <Home data={data}/>
      <button onClick={() => setCount(count+1)}>Count</button>
      <button onClick={() => setData(data+1)}>Data</button>
    </div>
  );
}

export default Memo