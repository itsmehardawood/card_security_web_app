import React from 'react';

function Sidebar({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeTab, 
  setActiveTab, 
  status 
}) {
  const sidebarItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Business Profile', icon: '👤' },
    { id: 'balance', label: 'Balance', icon: '💰' },
    { id: 'subscriptions', label: 'Subscriptions', icon: '📋' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'support', label: 'Support', icon: '💬' },
    { id: 'developers', label: 'Developers', icon: '⚡' }
  ];

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen`}>
      {/* Header - Fixed at top */}
      <div className="flex-shrink-0 p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
      </div>

      {/* Navigation - Scrollable middle section */}
      <div className="flex-1 overflow-y-auto">
        <nav className="py-4">
          <div className={`${sidebarOpen ? 'px-4' : 'px-2'} space-y-2`}>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center ${
                  sidebarOpen ? 'px-4 py-3' : 'px-2 py-3 justify-center'
                } text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={!sidebarOpen ? item.label : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </button>
            ))}
          </div>

          {/* Additional sections that could be added for scrolling demonstration */}
          {sidebarOpen && (
            <>
              {/* Account Section */}
              <div className="px-4 mt-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Account
                </div>
                <div className="space-y-1">
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">⚙️</span>
                    Settings
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">🔒</span>
                    Security
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">🔔</span>
                    Notifications
                  </button>
                </div>
              </div>

              {/* Resources Section */}
              <div className="px-4 mt-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Resources
                </div>
                <div className="space-y-1">
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">📚</span>
                    Documentation
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">🎓</span>
                    Tutorials
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="mr-3">📊</span>
                    Analytics
                  </button>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>

      {/* Status indicator - Fixed at bottom */}
      {sidebarOpen && (
        <div className="flex-shrink-0 p-4 border-t border-gray-100">
          <div className={`px-3 py-2 rounded-full text-sm font-medium text-center ${
            status === 'active' ? 'bg-green-100 text-green-800' :
            status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            status === 'approved' ? 'bg-blue-100 text-blue-800' :
            status === 'incomplete' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            Status: {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>

          {/* User info at bottom */}
          <div className="mt-3 px-3 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">User Account</p>
                <p className="text-xs text-gray-500 truncate">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;