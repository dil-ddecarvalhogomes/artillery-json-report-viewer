import React from "react";
import { Line } from "@reactchartjs/react-chart.js";

export default ({ data }) => {
  const colors = {
    min: "rgba(54, 235, 84, 0.5)",
    max: "rgba(54, 162, 235, 0.5)",
    median: "rgba(235, 54, 126, 0.5)",
    p95s: "rgba(184, 54, 235, 0.5)",
    p99s: "rgba(235, 193, 54, 0.5)"
  };

  const mapChartData = () => {
    const datasets = [];
    const labels = [];
    const min = [];
    const max = [];
    const median = [];
    const p95s = [];
    const p99s = [];
    data.forEach((item) => {
      let d = new Date(item.timestamp);
      labels.push(d.toLocaleString());
      min.push(item.latency.min);
      max.push(item.latency.max);
      median.push(item.latency.median);
      p95s.push(item.latency.p95);
      p99s.push(item.latency.p99);
    });
    datasets.push({
      label: "Min Response Time",
      data: min,
      fill: false,
      borderColor: colors.min,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "Max Response Time",
      data: max,
      fill: false,
      borderColor: colors.max,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "Median Response Time",
      data: median,
      fill: false,
      borderColor: colors.median,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "95th Percentile",
      data: p95s,
      fill: false,
      borderColor: colors.p95s,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "99th Percentile",
      data: p99s,
      fill: false,
      borderColor: colors.p99s,
      yAxisID: "y-axis-0"
    });
    return {
      labels: labels,
      datasets: datasets
    };
  };

  return (
    <div className="mb-4">
      <h5>
        <i className="fas fa-chart-area"></i> Latency over time
      </h5>
      <Line data={mapChartData()} options={options} />
    </div>
  );
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        id: "y-axis-0",
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
