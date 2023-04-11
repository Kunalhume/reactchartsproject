import './App.css';
import {ResponsiveContainer,LineChart,Line, XAxis,YAxis,CartesianGrid,Legend,Tooltip} from "recharts";

const pdata =[
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
]

function App() {
  return (
    <>
    <h1 className="chart-header">Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{
        top :5, right:100, left:20 , bottom:5
      }}>
        <CartesianGrid strokeDasharray="4 3" />
        <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value +" Prog."}/>
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: 'lightyellow' }}/>
        <Legend />
        <Line type="monotone" dataKey="student" stroke='red' activeDot={{r :6}}/>
        <Line type="monotone" dataKey="fees" stroke='green' activeDot={{r :6}}/>
      </LineChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
