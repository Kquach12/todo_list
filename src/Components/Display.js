import React, {useState} from 'react'

const Display = (props) => {

    const removeTask = (taskIndex) => {
        // console.log(task)
        props.removableTask(taskIndex)
    }

    const completeTask = (taskIndex) => {
        // console.log(task)
        props.completedTask(taskIndex)
    }

    return(
        <div>
            <h2>To Do List</h2>
            {
                props.todoList.map((task, index) =>
                    <div key={index}>
                        {task.status ?
                        <p style={{textDecorationLine:"line-through"}}>{task.task}</p> :
                        <p>{task.task}</p> 
                        
                        }
                        <input type="checkbox" onChange={ (e) => completeTask(index) }/>
                        <button onClick={ (e) => removeTask(index) } value={index}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}


export default Display