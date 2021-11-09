import React, {useState} from 'react'

const Display = (props) => {

    const removeTask = (task) => {
        console.log(task)
        props.removableTask(task)
    }

    return(
        <div>
            {
                props.todoList.map((task, index) =>
                    <div key={index}>
                        <p>{task}</p>
                        <input type="checkbox" />
                        <button onClick={ (e) => removeTask(e.target.value) } value={task}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}


export default Display