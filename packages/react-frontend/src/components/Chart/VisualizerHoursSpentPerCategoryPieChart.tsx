import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import { ITask, Category, CategoryProgress, DateEntry } from '../../types/types';

const RADIAN = Math.PI / 180;
const labelNameHoursPercentage: React.FC<{cx: number , cy: number, midAngle: number, innerRadius: number, outerRadius: number, name: string, hours: number, percent : number}> 
= ({cx, cy, midAngle, innerRadius, outerRadius, name, hours, percent}) => {

    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if(hours === 1) {
        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${name}: ${hours} Hour - ${(percent * 100).toFixed(0)}%`}
            </text>
        )
    } else {
        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${name}: ${hours} Hours - ${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }
}

function calculateTaskHours(taskDateEntries : DateEntry[]): number {

    let taskHours = 0;

    for (let object of taskDateEntries) {
        taskHours += object.hours;
    }

    return taskHours;
}

function calculateTotalHours(categoryProgress: CategoryProgress[]): number {
    let totalHours = 0;

    for (let object of categoryProgress) {
        totalHours += object.hours;
    }

    return totalHours;;
}

function calculateCategoryProgress(tasks : ITask[], categories : Category[]): CategoryProgress[] {

    let category_progress: CategoryProgress[] = [];

    for (let i = 0; i < categories.length; i++) {
        let categoryType: CategoryProgress = { name: categories.at(i)?.name, hours : 0 , color: categories.at(i)?.color}

        category_progress.push(categoryType)
    }

    if(tasks.length !== 0) {
        for(let task of tasks) {
            for (let object of category_progress) {
                if (object.name === task.category) {
                    object.hours += calculateTaskHours(task.datesUpdated);
                }
            }
        }
    }

    let filtered_category_progress = category_progress.filter((category_progress) => category_progress.hours !== 0)
    
    return filtered_category_progress;
}

function noHoursWorked(category_progress : CategoryProgress[]) : Boolean {

    let categoriesWithNoHoursWorked = 0;

    for (let object of category_progress) {
        if(object.hours === 0) {
            categoriesWithNoHoursWorked += 1;
        }
    }

    if(categoriesWithNoHoursWorked === category_progress.length) {
        return true;
    } else {
        return false;
    }
}

const VisualizerNumberTasksPerCategoryPieChart: React.FC<{tasks : ITask[], categories : Category[]}> = (input) => {
    let category_progress: CategoryProgress[] = calculateCategoryProgress(input.tasks, input.categories);

    if(noHoursWorked(category_progress)) {
        category_progress.length = 0;
        let noCompleteTasks: CategoryProgress = { name: "No Tasks Complete", hours : 1 , color: "#777777"}
        category_progress.push(noCompleteTasks)

        return (
            <PieChart width={1250} height={600}>
                <text x={625} y={300} textAnchor="middle" dominantBaseline="middle">
                    {"No Hours Worked"}
                </text>
                <Pie data={category_progress} cx="50%" cy="50%" labelLine={false}
                    fill="#8884d8" dataKey="hours" innerRadius={'30%'} outerRadius={'90%'}>
                    {category_progress.map((entry, index) => 
                        (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
            </PieChart>
        )
    }

    return (
        <PieChart width={1250} height={600}>
            <text x={625} y={300} textAnchor="middle" dominantBaseline="middle">
                {`Total Hours: ${calculateTotalHours(category_progress)}`}
            </text>
            <Pie data={category_progress} cx="50%" cy="50%" labelLine={true} label={labelNameHoursPercentage}
                fill="#8884d8" dataKey="hours" innerRadius={'25%'} outerRadius={'80%'}>
                {category_progress.map((entry, index) => 
                    (<Cell key={`cell-${index}`} fill={entry.color} />))}
            </Pie>
        </PieChart>
    )
}

export default VisualizerNumberTasksPerCategoryPieChart
