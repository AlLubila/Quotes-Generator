import { useState } from 'react'
import './index.css'

export const App = () => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue !== '') {
      setTasks([...tasks, inputValue])
      setInputValue("")
    } else {
      setTasks([...tasks])
    }
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  return (
    <>
    <div>
    <h1>To do list</h1>
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
    <ul>
      {tasks.map((task, index) => <li key={index}>
        {task}
        <button onClick={()=> handleDelete(index)}>Delete</button>
        </li> )}
    </ul>
    </div>
   
    </>
  )
}
