import React from 'react'
import { Task, Category, CategoryProgress, DateEntry } from '../../types/types';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function calculateTaskHours(taskDateEntries : DateEntry[]): number {
    let taskHours = 0;

    for (let object of taskDateEntries) {
        taskHours += object.hours;
    }

    return taskHours;
}

const VisualizerHoursSpentPerTask: React.FC<{tasks : Task[], categories : Category[], category: string}> = (input) =>  {
  return (
    <BarChart
        width={1000}
        height={600}
        data={input.categories}
        margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  )
}

export default VisualizerHoursSpentPerTask
