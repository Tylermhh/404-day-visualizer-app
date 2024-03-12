import React from 'react'
import { Task, TaskHours, Category, DateEntry } from '../../types/types';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function calculateTaskHours(taskDateEntries : DateEntry[]): number {
    let taskHours = 0;

    for (let object of taskDateEntries) {
        taskHours += object.hours;
    }

    return taskHours;
}

function calculateCategoryTaskHours(tasks : Task[], categories: Category[], category?: string): TaskHours[] {
    let specificCategoryTasks = tasks.filter((tasks) => tasks.category === category)

    let taskHours: TaskHours[] = [];

    let maxHours = 0;

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

const VisualizerHoursSpentPerTaskBarChart: React.FC<{tasks : Task[], categories : Category[], category: string}> = (input) =>  {

    let taskHours: TaskHours[] = calculateCategoryTaskHours(input.tasks, input.categories, input.categories.at(Number(input.category))?.name);

    return (
        // <text>
        //     {JSON.stringify(taskHours)}
        // </text>
        <BarChart width={1000} height={600} data={taskHours} 
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hours" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill={input.categories.at(Number(input.category))?.color} activeBar={<Rectangle fill={input.categories.at(Number(input.category))?.color}/>} />
        </BarChart>
    )
}

export default VisualizerHoursSpentPerTaskBarChart
