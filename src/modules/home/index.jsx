import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const BarChartResponsive = () => {
  const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
  ];
  return (
    <ResponsiveContainer width={500} height={500}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 100,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const SimplePieChart = () => {
  const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

const Dashboard = () => {
  return (
    <>
      <BarChartResponsive />
      <SimplePieChart />
    </>
  );
};

export default Dashboard;
