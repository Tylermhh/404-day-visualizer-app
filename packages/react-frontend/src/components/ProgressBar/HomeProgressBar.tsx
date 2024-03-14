import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {ITask} from "./../../types/types";

const ProgressMade: React.FC<{taskData : ITask[]}> = (input) => {

    const totalProgress = input.taskData.length

    if(totalProgress === 0) {
        return(
            <div>
                <ProgressBar striped now={0} label={`${0}%`}/>
            </div>
        )
    } 

    const progress = input.taskData.reduce((a, item) => a + (item.done === true ? 1 : 0) , 0)

    const now = ((progress / totalProgress) * 100)
    
    return(
        <div>
            <ProgressBar striped now={now} label={`${now.toFixed(0)}%`}/>
        </div>
    )
}

const HomeProgressBar: React.FC<{taskData : ITask[]}> = (input) => {
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