import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import { Task, Category, CategoryProgress, DateEntry } from '../../types/types';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel: React.FC<{cx: number , cy: number, midAngle: number, innerRadius: number, outerRadius: number, category: string, hours: number}> 
    = ({cx, cy, midAngle, innerRadius, outerRadius, category, hours}) => {

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {}
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

function calculateCategoryProgress(tasks : Task[], categories : Category[]): CategoryProgress[] {

    let category_progress: CategoryProgress[] = [];

    for (let i = 0; i < categories.length; i++) {
        let categoryType: CategoryProgress = { name: categories.at(i)?.name, hours : 1 , color: categories.at(i)?.color}

        category_progress.push(categoryType)
    }

    for(let task of tasks) {
        for (let object of category_progress) {
            if (object.name === task.category) {
                object.hours += calculateTaskHours(task.datesUpdated);
            }
        }
    }
    
    return category_progress;
}

const HomePieChart: React.FC<{tasks : Task[], categories : Category[]}> = (input) => {
    
    let category_progress: CategoryProgress[] = calculateCategoryProgress(input.tasks, input.categories);

    return (
        <PieChart width={300} height={350}>
            <Pie data={category_progress} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel}
                outerRadius={150} fill="#8884d8" dataKey="hours">
                {category_progress.map((entry, index) => 
                    (<Cell key={`cell-${index}`} fill={entry.color} />))}
            </Pie>
        </PieChart>
    )
}

export default HomePieChart
