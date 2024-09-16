import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Completed", value: 67 },
  { name: "Approved", value: 10 },
  // { name: 'Cancelled', value: 46 },
  // { name: 'Pending', value: 67 },
];

const Cancelled = () => (
  <div>
    <PieChart fill="teal" width={300} height={200}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8">
        {data.map((entry, index) => {
          if (index === 1) {
            return <Cell key={`cell-${index}`} fill="white" />;
          }
          return <Cell key={`cell-${index}`} fill="green" />;
        })}
      </Pie>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={0}
        outerRadius={70}
        isAnimationActive={false}>
        {data.map((entry, index) => {
          return (
            <Cell key={`cell-${index}`} fill="lightgreen" stroke="lightgreen" />
          );
        })}
        <Label
          value={`${data[0].value}%`}
          position="center"
          fill="black"
          style={{
            fontSize: "32px",
            fontWeight: "normal",
            fontFamily: "Roboto",
          }}
        />
      </Pie>
    </PieChart>
  </div>
);

export default Cancelled;
