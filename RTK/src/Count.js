import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
    const count=useSelector((state)=>state.counter.count)

  return (
    <div><b>{count}</b></div>
  )
}

export default Count