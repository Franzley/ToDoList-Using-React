import React from 'react'
import { useState } from "react";

const Inputs = (props) => {
  const [task, setTask ] = useState('');

  const newTask = (e) =>{
    setTask(e.target.value)
  }
  const returnValue = (e) =>{
    if(e.key==='Enter'){
      props.onTask(task)
      setTask("")
    }
  }
  return (
       <input type="text" onChange={newTask} value={task} onKeyDown={returnValue} placeholder="Enter Task"/>
  )
}

export default Inputs