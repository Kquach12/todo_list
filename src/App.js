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

  return (
    <div className="App">
      <Form newTask = {addToTaskArray}/>
      <Display todoList={taskArray}/>
    </div>
  );
}

export default App;
