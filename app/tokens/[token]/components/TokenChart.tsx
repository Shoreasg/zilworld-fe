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
} from "chart.js";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { TokenChartProps } from "../../../../types";

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

  const labels = chartData.dataset
    ?.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
    .map((chartData) => {
      return moment(chartData.time).format("MMM DD, h:mm A");
    });

  const chartDataSet = {
    labels,
    datasets: [
      {
        label: "Price",
        data: chartData.dataset
          ?.sort(
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
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Chart
        <p className="text-xs font-medium leading-6 text-red-500">
          Note: Chart data are in USD and updates every 30 minutes
        </p>
      </h3>
      <div className="bg-white h-[500px] ">
        <Line
          data={chartDataSet}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
