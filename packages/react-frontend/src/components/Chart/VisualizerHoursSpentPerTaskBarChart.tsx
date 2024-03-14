import React from 'react'
import { ITask, TaskHours, Category, DateEntry } from '../../types/types';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

function calculateTaskHours(taskDateEntries : DateEntry[]): number {
    let taskHours = 0;

    for (let object of taskDateEntries) {
        taskHours += object.hours;
    }

    return taskHours;
}

function calculateCategoryTaskHours(tasks : ITask[], categories: Category[], category?: string): TaskHours[] {

    let taskHours: TaskHours[] = [];
    let maxHours = 0;

    if(tasks.length !== 0) {
        let specificCategoryTasks = tasks.filter((tasks) => tasks.category === category)

        for (let task of specificCategoryTasks) {
            let hoursSpent = calculateTaskHours(task.datesUpdated);

            if(maxHours < hoursSpent) {
                maxHours = hoursSpent;
            }
        }

        for (let i = 0; i <= maxHours; i++) {
            let specificHour: TaskHours = { hours: i, amount: 0}
            taskHours.push(specificHour)
        }
        
        for (let task of specificCategoryTasks) {
            let hoursSpent = calculateTaskHours(task.datesUpdated);
    
            for (let object of taskHours) {
                if (object.hours === hoursSpent) {
                    object.amount += 1;
                }
            }
        }

        return taskHours;
    }

    let specificHour: TaskHours = { hours: 0, amount: 0}
    taskHours.push(specificHour)
    
    return taskHours;
}

const VisualizerHoursSpentPerTaskBarChart: React.FC<{tasks : ITask[], categories : Category[], category: string}> = (input) =>  {

    let taskHours: TaskHours[] = calculateCategoryTaskHours(input.tasks, input.categories, input.categories.at(Number(input.category))?.name);

    return (
        <BarChart width={1000} height={600} data={taskHours} 
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hours">
            <Label value="Number of Tasks" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis>
                <Label angle={270} position='left' style={{ textAnchor: 'middle' }}>
                    Hours Spent
                </Label>
            </YAxis>
            <Tooltip />
            <Bar dataKey="amount" fill={input.categories.at(Number(input.category))?.color} activeBar={<Rectangle fill={input.categories.at(Number(input.category))?.color}/>} />
        </BarChart>
    )
}

export default VisualizerHoursSpentPerTaskBarChart
