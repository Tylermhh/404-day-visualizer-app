import React from 'react'
import { ITask, TaskHours, CompletedNotCompletedTasks, Category, DateEntry } from '../../types/types';
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

function calculateCategoryCompletedNotCompleted(tasks : ITask[], categories: Category[], category?: string): CompletedNotCompletedTasks[] {

    let completedNotCompleted: CompletedNotCompletedTasks[] = [];
    let completed: CompletedNotCompletedTasks = { type: "Completed", amount: 0 }
    let notCompleted: CompletedNotCompletedTasks = { type: "Not Completed", amount: 0 }

    if(tasks.length !== 0) {
        let specificCategoryTasks = tasks.filter((tasks) => tasks.category === category)

        for (let task of specificCategoryTasks) {
            if(task.done) {
                completed.amount += 1;
            } else {
                notCompleted.amount += 1;
            }
        }
    }

    completedNotCompleted.push(completed)
    completedNotCompleted.push(notCompleted)
    
    return completedNotCompleted;
}

const VisualizerCompletedNotCompletedTasksPerCategoryBarChart: React.FC<{tasks : ITask[], categories : Category[], category: string}> = (input) =>  {

    let completedNotCompleted: CompletedNotCompletedTasks[] = calculateCategoryCompletedNotCompleted(input.tasks, input.categories, input.categories.at(Number(input.category))?.name);

    return (
        <BarChart width={1000} height={600} data={completedNotCompleted} 
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type">
                <Label value="Task Type" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis>
                <Label angle={270} position='left' style={{ textAnchor: 'middle' }}>
                    Number of Tasks
                </Label>
            </YAxis>
            <Tooltip />
            <Bar dataKey="amount" fill={input.categories.at(Number(input.category))?.color} activeBar={<Rectangle fill={input.categories.at(Number(input.category))?.color}/>} />
        </BarChart>
    )
}

export default VisualizerCompletedNotCompletedTasksPerCategoryBarChart
