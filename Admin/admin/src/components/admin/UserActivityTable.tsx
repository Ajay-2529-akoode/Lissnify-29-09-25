"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Clock,
  User,
  Activity
} from "lucide-react";

interface UserActivityTableProps {
  data: any;
}

interface UserActivity {
  id: string;
  name: string;
  email: string;
  type: 'seeker' | 'listener';
  lastActive: string;
  sessionDuration: string;
  connections: number;
  status: 'online' | 'offline' | 'away';
}

const UserActivityTable: React.FC<UserActivityTableProps> = ({ data }) => {
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("lastActive");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 1,
    has_next: false,
    has_previous: false,
    total_users: 0
  });
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isChangingPage, setIsChangingPage] = useState(false);

  // Use real API data
  useEffect(() => {
    if (data?.users) {
      const apiActivities: UserActivity[] = data.users.map((user: any) => ({
        id: user.u_id.toString(),
        name: user.user_name,
        email: user.user_email,
        type: user.user_type_display.toLowerCase(),
        lastActive: user.last_seen_display,
        sessionDuration: user.session_duration_display,
        connections: user.total_connections,
        status: user.status_display.toLowerCase()
      }));
      
      setActivities(apiActivities);
      setPagination(data.pagination || {});
      setIsLoading(false);
    }
  }, [data]);

  // Function to fetch more data
  const fetchMoreData = async (page: number, isPageChange: boolean = false) => {
    console.log(`Fetching page ${page}, current page: ${pagination.current_page}, isPageChange: ${isPageChange}`);
    setIsLoadingMore(true);
    if (isPageChange) {
      setIsChangingPage(true);
    }
    
    try {
      const adminToken = localStorage.getItem("adminToken");
      if (!adminToken) return;

      const params = new URLSearchParams({
        page: page.toString(),
        page_size: '10',
        search: searchTerm,
        user_type: filterType,
        sort_by: sortBy,
        sort_order: sortOrder
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user-activity/?${params}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const newData = await response.json();
        console.log(`Received data for page ${page}:`, newData.pagination);
        const newActivities: UserActivity[] = newData.users.map((user: any) => ({
          id: user.u_id.toString(),
          name: user.user_name,
          email: user.user_email,
          type: user.user_type_display.toLowerCase(),
          lastActive: user.last_seen_display,
          sessionDuration: user.session_duration_display,
          connections: user.total_connections,
          status: user.status_display.toLowerCase()
        }));
        
        setActivities(newActivities);
        setPagination(newData.pagination || {});
        console.log(`Updated pagination to page ${newData.pagination?.current_page}`);
      }
    } catch (error) {
      console.error('Error fetching more data:', error);
    } finally {
      setIsLoadingMore(false);
      if (isPageChange) {
        setIsChangingPage(false);
      }
    }
  };

  // Handle search with debouncing
  useEffect(() => {
    if (isChangingPage) return; // Don't trigger search when changing pages
    
    const timeoutId = setTimeout(() => {
      if (data?.users && searchTerm !== '') {
        console.log('Search term changed, resetting to page 1');
        fetchMoreData(1);
      }
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchTerm, isChangingPage]);

  // Handle filter and sort changes
  const handleFilterChange = (newFilterType: string) => {
    setFilterType(newFilterType);
    if (data?.users) {
      console.log('Filter type changed, resetting to page 1');
      fetchMoreData(1);
    }
  };

  const handleSortChange = (newSortBy: string, newSortOrder: string) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder as "asc" | "desc");
    if (data?.users) {
      console.log('Sort changed, resetting to page 1');
      fetchMoreData(1);
    }
  };

  // Since we're using server-side filtering and sorting, we don't need client-side filtering
  const sortedActivities = activities;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    return type === "seeker" 
      ? "bg-blue-500/20 text-blue-300 border-blue-500/30" 
      : "bg-green-500/20 text-green-300 border-green-500/30";
  };


  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading user activity...</p>
          </div>
        </div>
      </div>
    );
  }

  if (activities.length === 0 && !isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400">No users found</p>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="all">All Users</option>
            <option value="seeker">Seekers</option>
            <option value="listener">Listeners</option>
          </select>
          
          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              handleSortChange(field, order);
            }}
            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="lastActive-desc">Last Active (Newest)</option>
            <option value="lastActive-asc">Last Active (Oldest)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Activity Table */}
      <div className="overflow-x-auto relative">
        {isLoadingMore && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="bg-white/10 rounded-lg p-4 flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              <span className="text-white text-sm">Loading...</span>
            </div>
          </div>
        )}
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Type</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Last Active</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Session</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Connections</th>
            </tr>
          </thead>
          <tbody>
            {sortedActivities.map((activity) => (
              <tr key={activity.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${getStatusColor(activity.status)}`}></div>
                    </div>
                    <div>
                      <p className="font-medium text-white">{activity.name}</p>
                      <p className="text-sm text-gray-400">{activity.email}</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(activity.type)}`}>
                    {activity.type === "seeker" ? "Seeker" : "Listener"}
                  </span>
                </td>
                
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(activity.status)}`}></div>
                    <span className="text-sm capitalize text-gray-300">{activity.status}</span>
                  </div>
                </td>
                
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{activity.lastActive}</span>
                  </div>
                </td>
                
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-300">{activity.sessionDuration}</span>
                </td>
                
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{activity.connections}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/20">
        <p className="text-sm text-gray-400">
          Showing {sortedActivities.length} of {pagination.total_users} users
          {pagination.total_pages > 1 && ` (Page ${pagination.current_page} of ${pagination.total_pages})`}
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => fetchMoreData(pagination.current_page - 1, true)}
            disabled={!pagination.has_previous || isLoadingMore || isChangingPage}
            className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoadingMore ? "Loading..." : "Previous"}
          </button>
          
          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, pagination.total_pages) }, (_, i) => {
              let pageNum;
              if (pagination.total_pages <= 5) {
                pageNum = i + 1;
              } else if (pagination.current_page <= 3) {
                pageNum = i + 1;
              } else if (pagination.current_page >= pagination.total_pages - 2) {
                pageNum = pagination.total_pages - 4 + i;
              } else {
                pageNum = pagination.current_page - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => fetchMoreData(pageNum, true)}
                  disabled={isLoadingMore || isChangingPage}
                  className={`px-3 py-1 text-sm rounded transition-colors disabled:cursor-not-allowed ${
                    pageNum === pagination.current_page
                      ? "text-white bg-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={() => fetchMoreData(pagination.current_page + 1, true)}
            disabled={!pagination.has_next || isLoadingMore || isChangingPage}
            className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoadingMore ? "Loading..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserActivityTable;
