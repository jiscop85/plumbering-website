
import React, { useState } from 'react';
import { 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Shield, 
  Home, 
  Calendar,
  MessageSquare,
  CreditCard,
  Database,
  Activity,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard', color: 'text-blue-500' },
    { id: 'users', icon: Users, label: 'Users Management', color: 'text-green-500' },
    { id: 'services', icon: Home, label: 'Services', color: 'text-purple-500' },
    { id: 'bookings', icon: Calendar, label: 'Bookings', color: 'text-orange-500' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', color: 'text-pink-500' },
    { id: 'payments', icon: CreditCard, label: 'Payments', color: 'text-emerald-500' },
    { id: 'reports', icon: FileText, label: 'Reports', color: 'text-indigo-500' },
    { id: 'settings', icon: Settings, label: 'Settings', color: 'text-gray-500' },
  ];

  const statsCards = [
    { title: 'Total Users', value: '2,543', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Services', value: '1,234', change: '+8%', icon: Home, color: 'bg-green-500' },
    { title: 'Monthly Revenue', value: '$45,678', change: '+23%', icon: CreditCard, color: 'bg-purple-500' },
    { title: 'Completed Jobs', value: '892', change: '+15%', icon: Activity, color: 'bg-orange-500' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending', joinDate: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Active', joinDate: '2024-01-13' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Inactive', joinDate: '2024-01-12' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Latest system activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">New service request</p>
                    <p className="text-gray-400 text-sm">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Users</CardTitle>
            <CardDescription className="text-gray-400">Newly registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.slice(0, 4).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Users Management</h2>
          <p className="text-gray-400">Manage all registered users</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">User</TableHead>
                <TableHead className="text-gray-300">Email</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Join Date</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentUsers.map((user) => (
                <TableRow key={user.id} className="border-gray-700">
                  <TableCell className="text-white">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{user.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'users':
        return renderUsers();
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Database className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-400">This section is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-gradient-to-b from-gray-900 to-black border-r border-gray-700 min-h-screen`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              {sidebarOpen && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Admin Panel</h2>
                    <p className="text-gray-400 text-xs">Batis Home</p>
                  </div>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-400 hover:text-white"
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 text-yellow-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${activeTab === item.id ? 'text-yellow-400' : item.color}`} />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </button>
              ))}
            </nav>
          </div>

          {sidebarOpen && (
            <div className="absolute bottom-4 left-4 right-4">
              <Link to="/">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Website
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white capitalize">{activeTab.replace(/([A-Z])/g, ' $1')}</h1>
                <p className="text-gray-400 mt-1">Welcome back, Administrator</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Bell className="h-5 w-5" />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-6 overflow-y-auto h-[calc(100vh-100px)]">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
