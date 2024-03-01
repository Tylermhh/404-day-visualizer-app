import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
// import { Sector, ResponsiveContainer } from 'recharts';
import { CategoryProgress } from '../../types/types';

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

const HomePieChart: React.FC<{category_progress : CategoryProgress[]}> = (input) => {
    return (
        <PieChart width={300} height={350}>
            <Pie data={input.category_progress} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel}
                outerRadius={150} fill="#8884d8" dataKey="hours">
                {input.category_progress.map((entry, index) => 
                    (<Cell key={`cell-${index}`} fill={entry.color} />))}
            </Pie>
        </PieChart>
    )
}

export default HomePieChart
