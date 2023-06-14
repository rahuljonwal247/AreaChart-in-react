
import './App.css';
import {ResponsiveContainer,AreaChart,Area,CartesianGrid, XAxis, YAxis, Tooltip,Legend} from 'recharts'
const data = [
  {
    "name": "Area A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Area B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Area C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Area D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Area E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Area F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Area G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

function App() {
  return (
   <>
   <h1 className='chart-heading'>Area chart</h1>
   <ResponsiveContainer width='100%' aspect={3}>
   <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <Legend/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
   </ResponsiveContainer>
   </>
  );
}

export default App;
