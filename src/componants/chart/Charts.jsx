import { LineChart, Line, XAxis, YAxis } from 'recharts';
import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const marksData = [
    { month: "January", math: 78, physics: 85 },
    { month: "February", math: 82, physics: 88 },
    { month: "March", math: 75, physics: 80 },
    { month: "April", math: 38, physics: 90 },
    { month: "May", math: 80, physics: 85 },
    { month: "June", math: 88, physics: 92 },
    { month: "July", math: 82, physics: 87 },
    { month: "August", math: 90, physics: 94 },
    { month: "September", math: 85, physics: 89 },
    { month: "October", math: 10, physics: 93 },
    { month: "November", math: 89, physics: 91 },
    { month: "December", math: 92, physics: 95 }
  ];
const Charts = () => {
    return (
        <div>
            <LineChart width={800} height={200} data={marksData}>
                <XAxis dataKey={'math'}></XAxis>
                <YAxis></YAxis>
    <Line type="monotone" dataKey="math" stroke="green" />
  </LineChart>

  {/* Composed responsive line charts */}
  <h1>Composed responsive line charts</h1>

  <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={marksData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="math" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="physics" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="math" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

            
            
        </div>
    );
};

export default Charts;