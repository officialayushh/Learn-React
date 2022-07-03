import React, { useEffect} from 'react'

function UseTitle(props) {
    useEffect(() => {
        document.title = props + "hits on button"
    })
  return (
    <div>UseTitle</div>
  )
}

export default UseTitle