import React, {useState} from 'react'

const Display = (props) => {
    return(
        <div>
            {
                props.todoList.map((task, index) =>
                    <div>
                        <p>{task}</p>
                    </div>
                )
            }
        </div>
    )
}


export default Display