import React, {useState} from 'react'

const Form = (props) =>{

    const [task, setTask] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.newTask(task)
        console.log(task)
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange={(e) => setTask(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
        
    )
}

export default Form