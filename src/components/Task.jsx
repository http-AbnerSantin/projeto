import React from "react";
import '../components/Task.css';


const Task = ({task, handlesTaskClick, handlesTaskRemove}) => {
    return (
        <div className="task-container" 
        style={task.completed ? {borderLeft:'6px solid chartreuse'} : {}}>

            <div className="task-title" onClick={() =>handlesTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task" onClick={() => handlesTaskRemove(task.id)}>
                    X
                </button>
            </div>
        </div>
    )
    
    
    
      
}

export default Task;