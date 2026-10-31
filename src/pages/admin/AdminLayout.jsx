import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  HelpCircle,
  LogOut,
  Menu,
  X,
  AlertCircle,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Case Studies', href: '/admin/case-studies', icon: Briefcase },
    { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
    { name: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  ];

  const handleSignOut = async () => {
    await logout();
    navigate('/admin/login');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* Top Demo Banner */}
      <div className="bg-amber-500 text-white text-xs md:text-sm font-semibold px-4 py-2 flex items-center justify-between shadow-sm z-50">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            <strong>ADMIN DEMO MODE:</strong> Content updates operate on in-memory state. Connect to your database API for persistent storage in production.
          </span>
        </div>
        <Link
          to="/"
          target="_blank"
          className="underline hover:text-gray-100 flex items-center space-x-1 flex-shrink-0 ml-3"
        >
          <span>View Site</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 flex z-40 md:hidden">
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4 space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold">
                    L
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-900">Luxonixstacks</h1>
                    <span className="text-xs text-gray-500 block">Admin Portal</span>
                  </div>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="mr-4 h-5 w-5" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex items-center w-full justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{user?.email || 'admin@luxonixstacks.com'}</p>
                    <span className="text-xs text-gray-500">Authenticated Session</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    title="Sign Out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white shadow-sm">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-6 space-x-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
                  L
                </div>
                <div>
                  <h1 className="text-base font-bold text-gray-900 leading-tight">Luxonixstacks</h1>
                  <span className="text-xs text-gray-500 font-medium">Control Center</span>
                </div>
              </div>
              <nav className="flex-1 px-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      location.pathname === item.href
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center w-full justify-between">
                <div className="overflow-hidden mr-2">
                  <p className="text-xs font-bold text-gray-900 truncate">
                    {user?.email || 'admin@luxonixstacks.com'}
                  </p>
                  <p className="text-[11px] text-green-600 font-semibold flex items-center">
                    <ShieldCheck className="h-3 w-3 mr-1" /> Active
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-white transition-colors"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-2 pt-2 bg-white border-b border-gray-200 flex items-center">
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="ml-2 font-bold text-gray-800 text-sm">Luxonixstacks Admin</span>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            {children || <Outlet />}
          </main>
        </div>
      </div>
    </div>
  );
}
