import React from "react";

import Task from "./Task";


const Tasks = ({ tasks, handlesTaskClick, handlesTaskRemove }) => {
    
    return (<>
            {tasks.map((task) => (
            <Task task={task} handlesTaskClick={handlesTaskClick}
            handlesTaskRemove = {handlesTaskRemove}/>)
            
            )}   
                     
        </>
    )
}

export default Tasks;