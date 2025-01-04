import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { dataset1, dataset2 } from "@/lib/data";

const TestB = () => {
  return (
    <div className="flex flex-col justify-center gap-3 px-32">
      {/* Line Chart Section */}
      <div className="max-w-[1200px] "> {/* Center the Line chart */}
        <Line
          data={{
            labels: dataset2.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: dataset2.map((data) => data.revenue),
              },
              {
                label: "Cost",
                data: dataset2.map((data) => data.cost),
              },
            ],
          }}
        />
      </div>

      {/* Bar and Doughnut Chart Section */}
      <div className="flex gap-6 px-32 justify-between items-center ">
        {/* Bar Chart */}
        <div className="w-full max-w-[300px]"> {/* Full width with max width */}
          <Bar
            data={{
              labels: dataset1.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: dataset1.map((data) => data.value),
                },
              ],
            }}
          />
        </div>

        {/* Doughnut Chart */}
        <div className="w-full max-w-[300px]"> {/* Full width with max width */}
          <Doughnut
            data={{
              labels: dataset1.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: dataset1.map((data) => data.value),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestB;
