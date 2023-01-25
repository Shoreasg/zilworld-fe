"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { TokenChartProps } from "../../../types";

export default function TokenChart({ chartData }: TokenChartProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = chartData.dataset.map((chartData) => {
    return moment(chartData.time).format("MMM DD, h:mm A");
  });

  const chartDataSet = {
    labels,
    datasets: [
      {
        label: "Price",
        data: chartData.dataset
          .sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
          )
          .map((chartData) => {
            return chartData.value;
          }),
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  return (
    <div className="flex flex-1 p-6 justify-center flex-col md:pl-64 md:ml-6">
      <div className="bg-white h-[500px] ">
        <Line
          data={chartDataSet}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
