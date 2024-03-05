import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Task} from "./../../types/types";

const ProgressMade: React.FC<{taskData : Task[]}> = (input) => {

    const totalProgress = input.taskData.length
    const progress = input.taskData.reduce((a, item) => a + (item.done === true ? 1 : 0) , 0)

    const now = ((progress / totalProgress) * 100)
    
    return(
        <div>
            <ProgressBar striped now={now} label={`${now.toFixed(2)}%`}/>
        </div>
    )
}

const HomeProgressBar: React.FC<{taskData : Task[]}> = (input) => {
    return (
        <div>
            <h5>
                % Tasks Completed Today
            </h5>
            <ProgressMade 
                taskData = {input.taskData}
                /> 
        </div>
    )
}

export default HomeProgressBar