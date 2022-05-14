import React from "react";
import '../components/Task.css';


const Task = ({task}) => {
    return (
        <div className="task-container">
            <p>{task.title}</p>   
        </div>
    )        
}

export default Task;