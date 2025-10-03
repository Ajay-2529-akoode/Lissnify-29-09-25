"use client"

import { ReactNode, useState } from "react";
import Navbar from "@/Components/Navbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import ProtectedRoute from "@/Components/ProtectedRoute";

interface DashboardLayoutProps {
  userType: 'seeker' | 'listener';
  children: ReactNode;
}

export default function DashboardLayout({ userType, children }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapsedChange = (isCollapsed: boolean) => {
    setIsSidebarCollapsed(isCollapsed);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C]">
        <Navbar />
        
        <div className="flex pt-16 sm:pt-20">
          {/* Left Sidebar */}
          <DashboardSidebar 
            userType={userType} 
            onCollapsedChange={handleSidebarCollapsedChange}
          />
          
          {/* Main Content Area */}
          <div className={`w-full flex-1 p-2 sm:p-4 lg:p-6 xl:p-8 transition-all duration-300 ${
            isSidebarCollapsed ? 'lg:ml-16 xl:ml-20' : 'lg:ml-64 xl:ml-80'
          }`}>
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
