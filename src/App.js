import Form from './Components/Form';
import Display from './Components/Display';

import './App.css';
import {useState} from 'react'

function App() {
  const [taskArray, setTaskArray] = useState([])
  
  const addToTaskArray = (newTask) => {
    setTaskArray(arr => [...arr, newTask])
    console.log(taskArray)
  }

  const deleteFromTaskArray = (removableTaskIndex) => {
    setTaskArray(taskArray.filter((task, i) => i !== removableTaskIndex))
  }

  const toggleComplete = (completedTaskIndex) => {
    setTaskArray(taskArray.map((task, i) => { 
      if (i == completedTaskIndex){
        task.status = !task.status
      }
      return task
    }))
    console.log(taskArray)
  }

  return (
    <div className="App">
      <Form newTask = {addToTaskArray}/>
      <Display 
        todoList={taskArray} 
        removableTask={deleteFromTaskArray}
        completedTask={toggleComplete}
      />
    </div>
  );
}

export default App;
