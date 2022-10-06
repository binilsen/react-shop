import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const ExpenseChart = (props) => {
  return (
    <>
      <div
        style={{
          height: "250px",
          background: "white",
          marginBottom: "4px",
          marginTop: "4px",
          borderRadius: "20px",
        }}
      >
        <Bar
          options={{ maintainAspectRatio: false }}
          data={{
            labels: MONTH,
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default ExpenseChart;
