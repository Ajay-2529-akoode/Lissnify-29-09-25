"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/SideBar";
import UserActivityTable from "../../../components/admin/UserActivityTable";
import UserAnalyticsCharts from "../../../components/admin/UserAnalyticsCharts";
import { 
  Activity, 
  Users, 
  Clock, 
  TrendingUp, 
  Zap,
  BarChart3,
  Heart
} from "lucide-react";

const UserActivityDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const adminToken = localStorage.getItem("adminToken");

      if (!adminToken) {
        router.push("/admin/login");
        return;
      }

      try {
        // Fetch user activity data from the new API endpoint
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user-activity/`, {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
          },
          signal,
        });

        if (!response.ok) {
          if (response.status === 401) {
            router.push("/admin/login");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const activityData = await response.json();
        setData(activityData);
      } catch (err: any) {
        if (err.name === "AbortError") {
          // Request was cancelled
        } else {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Set up periodic refresh every 30 seconds to keep data updated
    const refreshInterval = setInterval(() => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        fetchData();
      }
    }, 30000);

    return () => {
      controller.abort();
      clearInterval(refreshInterval);
    };
  }, [router]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-blue-200">Loading user activity data...</p>
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center bg-red-500/20 border border-red-500/30 rounded-2xl p-8 max-w-md">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-red-300 mb-2">Error Loading Data</h2>
            <p className="text-red-200 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  // No data state
  if (!data) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl text-gray-300">No user activity data available</p>
          </div>
        </main>
      </div>
    );
  }

  // Calculate additional metrics from API data
  const activeUsers = (data as any)?.summary?.total_active_users || 0;
  const avgSessionDuration = (data as any)?.summary?.avg_session_duration || "0m";
  const peakVisitTime = (data as any)?.summary?.peak_visit_time || "7–9 PM";

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Sidebar />
      
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              User Activity Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Monitor user engagement and activity patterns</p>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Live Activity</p>
              <p className="text-xs text-gray-400">Real-time monitoring</p>
            </div>
          </div>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Users className="text-green-400" size={24} />
              </div>
              <TrendingUp className="text-green-400 opacity-60" size={20} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Total Active Users</h3>
            <p className="text-2xl font-bold text-green-400">{activeUsers}</p>
            <p className="text-green-400 text-xs mt-2">+12% from last month</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                <Clock className="text-yellow-400" size={24} />
              </div>
              <Zap className="text-yellow-400 opacity-60" size={20} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Avg. Session Duration</h3>
            <p className="text-2xl font-bold text-yellow-400">{avgSessionDuration}</p>
            <p className="text-yellow-400 text-xs mt-2">+8% from last week</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                <Heart className="text-pink-400" size={24} />
              </div>
              <Activity className="text-pink-400 opacity-60" size={20} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Peak Visit Time</h3>
            <p className="text-2xl font-bold text-pink-400">{peakVisitTime}</p>
            <p className="text-pink-400 text-xs mt-2">Peak engagement</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <UserAnalyticsCharts data={data} />
        </div>

        {/* User Activity Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="p-6 border-b border-white/20">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  User Activity Log
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Real-time user activity and engagement metrics
                  {(data as any)?.pagination?.total_users && (
                    <span className="ml-2 text-blue-400">
                      ({(data as any).pagination.total_users} total users)
                    </span>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  Refresh Data
                </button>
                <button
                  onClick={async () => {
                    try {
                      const adminToken = localStorage.getItem("adminToken");
                      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user-status-debug/`, {
                        method: 'GET',
                        headers: {
                          'Authorization': `Bearer ${adminToken}`,
                          'Content-Type': 'application/json',
                        },
                      });
                      const result = await response.json();
                      console.log('Current admin status:', result);
                      alert(`Admin Status: ${result.status} (Online: ${result.is_online})`);
                    } catch (error) {
                      console.error('Status check failed:', error);
                    }
                  }}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                >
                  Check Admin Status
                </button>
              </div>
            </div>
          </div>
          <UserActivityTable data={data} />
        </div>
      </main>
    </div>
  );
};

export default UserActivityDashboard;
