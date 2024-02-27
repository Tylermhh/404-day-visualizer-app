import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', hours: 5, color: '#0088FE'},
  { name: 'Group C', hours: 2, color: '#00C49F'},
  { name: 'Group C', hours: 3, color: '#FFBB28'},
  { name: 'Group D', hours: 4, color: '#FF8042'},
  { name: 'Group E', hours: 1, color: '#a9119c'},
  { name: 'Group F', hours: 2, color: '#5ec1dd'}
];

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

const HomePieChart: React.FC<{}> = () => {

    return (
        <PieChart width={300} height={400}>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel}
                outerRadius={150} fill="#8884d8" dataKey="hours">
                {data.map((entry, index) => 
                    (<Cell key={`cell-${index}`} fill={entry.color} />))}
            </Pie>
        </PieChart>
    )
}

export default HomePieChart
