import React from 'react'   
export default function Todocard(props) {
    const {children , handleTodoDelete , index , handleTodoUpdate} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                    handleTodoUpdate(index)
                }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => { 
                    handleTodoDelete(index)
                }}>
                <i  className="fa-solid fa-trash"></i>
            </button>
        </div>
   </li>
  )
}
