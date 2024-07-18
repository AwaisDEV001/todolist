import { useState , useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
 
  function persisdata(newlist) {
    localStorage.setItem('todos', JSON.stringify({todos: newlist}))
  }

  function handleAddTodo (newTodo){
    const newTodoList = [...todos, newTodo]
    persisdata(newTodoList)
    setTodos(newTodoList)
  }

  function handleTodoDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persisdata(newTodoList)
    setTodos(newTodoList)
  }

  function handleTodoUpdate(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleTodoDelete(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  } , [])

  return (
    <>
     <Todoinput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo} />
     <Todolist  handleTodoDelete={handleTodoDelete} handleTodoUpdate={handleTodoUpdate} todos={todos}/>
    </>
  )
}

export default App
