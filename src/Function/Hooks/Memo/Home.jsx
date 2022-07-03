import React, { memo } from 'react'

function Home(props) {
    console.log("Inner");
  return (
    <div>Home</div>
  )
}

export default memo(Home)