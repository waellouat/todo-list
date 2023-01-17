import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
const ListeTask = () => {
    const todos=useSelector(state=>state.todos)
  return (
    <div>
      <ul>
       {
         todos.map((el) => (<Task todo={el} /> )  )
       }
      </ul>
    </div>
  )
}

export default ListeTask ;
