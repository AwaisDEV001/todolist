import React from 'react'
import Todoinput from './Todoinput'
import Todocard from './Todocard'

export default function Todolist(props) {
    const { todos } = props

  return (
    <ul className='main'>
        {todos.map((todos, todoIndex) => {
            return (
               <Todocard {...props} key={todoIndex} index={todoIndex}>
                <p>{todos}</p>
               </Todocard>
            )
        })}
    </ul>
  )
}
