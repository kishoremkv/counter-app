import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// state and components 

// jsx = javascript + xml 
let state = {
  count: 0
}

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([
    {
      title: 'Gym',
      description: 'Go to Gym',
      completed: false 
    },
    {
      title: 'DSA',
      description: 'Learn DSA',
      completed: false
    }
  ])

  function addTodo()
  {
    setTodos([...todos, {
      title: 'Random',
      description: 'Random Todo',
      completed: false
    }])
  }

  return (
    <div>
      {/* <CustomButton count={count} setCount={setCount} >Counter {count}</CustomButton> */}
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
      <button onClick={addTodo}>Add a random todo</button>
      {
        todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

// Component
function CustomButton(props)
{
  function onClickHandler()
  {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>
  
}

//component
function Todo(props)
{
  return <div >
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
  </div>
  
}

export default App
