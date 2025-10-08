"use client";

import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Activity, Clock } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface UserAnalyticsChartsProps {
  data: any;
}

const UserAnalyticsCharts: React.FC<UserAnalyticsChartsProps> = ({ data }) => {

  // User Type Distribution
  const userTypeData = {
    labels: ["Seekers", "Listeners"],
    datasets: [
      {
        data: [
          data?.summary?.total_seekers || 0,
          data?.summary?.total_listeners || 0
        ],
        backgroundColor: [
          "rgba(50, 34, 197, 0.8)",
          "rgba(59, 130, 246, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgb(50, 34, 197,0.8)",
          "rgba(59, 130, 246, 1)",
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  };

  // Session Duration Data (mock data - would come from backend)
  const sessionDurationData = {
    labels: ["0-5 min", "5-15 min", "15-30 min", "30-60 min", "60+ min"],
    datasets: [
      {
        label: "Users",
        data: [25, 40, 30, 20, 15],
        backgroundColor: [
          "rgba(239, 68, 68, 0.8)",    // Red-500
          "rgba(245, 158, 11, 0.8)",   // Amber-500
          "rgba(34, 197, 94, 0.8)",    // Green-500
          "rgba(59, 130, 246, 0.8)",   // Blue-500
          "rgba(168, 85, 247, 0.8)",   // Purple-500
        ],
        hoverBackgroundColor: [
          "rgba(239, 68, 68, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(168, 85, 247, 1)",
        ],
        borderWidth: 0,
        borderRadius: 6,
      },
    ],
  };


  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#cbd5e1',
          font: {
            size: 12,
            weight: 'normal' as const,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.9)",
        titleColor: "#e5e7eb",
        bodyColor: "#e5e7eb",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Type Distribution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">User Type Distribution</h2>
                <p className="text-gray-400 text-sm">Seekers vs Listeners</p>
              </div>
            </div>
          </div>
          <div className="h-64">
            <Doughnut data={userTypeData} options={pieChartOptions} />
          </div>
        </div>

        {/* Session Duration Distribution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Session Duration</h2>
                <p className="text-gray-400 text-sm">User engagement time</p>
              </div>
            </div>
          </div>
          <div className="h-64">
            <Pie data={sessionDurationData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnalyticsCharts;
