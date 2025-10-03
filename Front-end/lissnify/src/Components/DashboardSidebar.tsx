"use client"

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Calendar,
  Users2,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  Star,

} from "lucide-react";

interface DashboardSidebarProps {
  userType: 'seeker' | 'listener';
  onCollapsedChange?: (isCollapsed: boolean) => void;
}

export default function DashboardSidebar({ userType, onCollapsedChange }: DashboardSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Listen for custom toggle event from navbar
  useEffect(() => {
    const handleToggleSidebar = () => {
      setIsMobileOpen(!isMobileOpen);
    };

    window.addEventListener('toggleSidebar', handleToggleSidebar);
    return () => window.removeEventListener('toggleSidebar', handleToggleSidebar);
  }, [isMobileOpen]);

  const seekerNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/seeker' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, path: '/dashboard/seeker/chats' },
    { id: 'community', label: 'Community', icon: Users2, path: '/community' },
    { id: 'profile', label: 'Profile', icon: User, path: '/dashboard/seeker/profile' },
    { id: 'feedback', label: 'Feedback', icon: Star, path: '/dashboard/seeker/feedback' }
  ];

  const listenerNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/listener' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, path: '/dashboard/listener/chats' },
    { id: 'community', label: 'Community', icon: Users2, path: '/community' },
    { id: 'profile', label: 'Profile', icon: User, path: '/dashboard/listener/profile' },
  ];

  const navItems = userType === 'seeker' ? seekerNavItems : listenerNavItems;

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileOpen(false); // Close mobile menu after navigation
  };

  const handleCollapseToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapsedChange?.(newCollapsedState);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Mobile Toggle Button - Hidden, using navbar button instead */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="hidden"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-16 sm:top-20 h-full bg-white/90 backdrop-blur-md shadow-xl border-r border-white/50 z-50 transition-all duration-300 ${isCollapsed ? 'w-16 sm:w-20' : 'w-56 sm:w-64'
        } ${isMobileOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-3 sm:p-6">
          {/* Brand Section */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            {!isCollapsed && (
              <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/logo.png" 
                  alt="Lissnify Logo" 
                  className="h-10 w-auto sm:h-12"
                />
              </Link>
            )}
            <button
              onClick={handleCollapseToggle}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2 sm:space-y-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-2 sm:gap-3'} px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${isActive(item.path)
                      ? 'bg-gradient-to-r from-[#FFB88C] to-[#FFF8B5] text-black shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                    }`}
                  aria-label={item.label}
                >
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isCollapsed ? 'text-gray-800' : ''}`} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className={`absolute bottom-4 sm:bottom-6 ${isCollapsed ? 'left-3 right-3 sm:left-6 sm:right-6' : 'left-3 right-3 sm:left-6 sm:right-6'}`}>
            <button
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-2 sm:gap-3'} px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all duration-200 text-sm sm:text-base`}
              aria-label="Logout"
            >
              <LogOut className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isCollapsed ? 'text-red-700' : ''}`} />
              {!isCollapsed && <span className="truncate">Logout</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
