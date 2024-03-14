import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { ITask, Category, CategoryProgress, DateEntry } from '../../types/types';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel: React.FC<{cx: number , cy: number, midAngle: number, innerRadius: number, outerRadius: number, name: string, hours: number, percent: number}> 
    = ({cx, cy, midAngle, innerRadius, outerRadius, name, hours, percent}) => {

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if(hours === 1) {
        return (
            <text x={x} y={y} width={10} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${hours} Task`}
            </text>
        )
    }
    return (
        <text x={x} y={y} width={10} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${hours} Tasks`}
        </text>
    )
}

function calculateTaskHours(taskDateEntries : DateEntry[]): number {

    let taskHours = 0;

    for (let object of taskDateEntries) {
        taskHours += object.hours;
    }

    return taskHours;
}

function calculateCategoryProgress(tasks : ITask[], categories : Category[]): CategoryProgress[] {

    let category_progress: CategoryProgress[] = [];

    for (let i = 0; i < categories.length; i++) {
        let categoryType: CategoryProgress = { name: categories.at(i)?.name, hours : 0, color: categories.at(i)?.color}

        category_progress.push(categoryType)
    }

    for(let task of tasks) {
        for (let object of category_progress) {
            if (object.name === task.category) {
                if(task.done) {
                    object.hours += 1;
                }
                // object.hours += calculateTaskHours(task.datesUpdated);
            }
        }
    }
    
    return category_progress;
}

const HomePieChart: React.FC<{tasks : ITask[], categories : Category[]}> = (input) => {
    
    let category_progress: CategoryProgress[] = calculateCategoryProgress(input.tasks, input.categories);

    let filtered_category_progress = category_progress.filter((category) => category.hours !== 0); 

    if(filtered_category_progress.length === 0) {
        let noCompleteTasks: CategoryProgress = { name: "No Tasks Complete", hours : 1 , color: "#777777"}
        filtered_category_progress.push(noCompleteTasks)
    }

    return (
        <PieChart width={400} height={400}>
            <Pie data={filtered_category_progress} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel}
                fill="#8884d8" dataKey="hours" overflow='visible' isAnimationActive={true}>
                {filtered_category_progress.map((entry, index) => 
                    (<Cell key={`cell-${index}`} fill={entry.color} />))}    
            </Pie>
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
    )
}

export default HomePieChart
