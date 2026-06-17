import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "10am", sales: 55 },
  { name: "11am", sales: 32 },
  { name: "12am", sales: 58 },
  { name: "01am", sales: 36 },
  { name: "02am", sales: 24 },
  { name: "03am", sales: 52 },
  { name: "04am", sales: 14 },
  { name: "05am", sales: 36 },
  { name: "06am", sales: 39 },
  { name: "07am", sales: 75 },
];

const ReportsChart = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h3 className="font-semibold text-lg mb-4">
        Reports
      </h3>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#7C3AED"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ReportsChart;