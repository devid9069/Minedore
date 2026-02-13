
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Settings, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Search,
  ArrowUpRight,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { dataService, Lead, Order } from '../services/dataService';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'orders'>('overview');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setLeads(dataService.getLeads());
    setOrders(dataService.getOrders());
  }, []);

  const handleDeleteLead = (id: string) => {
    dataService.deleteLead(id);
    setLeads(dataService.getLeads());
  };

  const handleDeleteOrder = (id: string) => {
    dataService.deleteOrder(id);
    setOrders(dataService.getOrders());
  };

  const SidebarItem = ({ id, icon, label }: { id: any, icon: any, label: string }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
        activeTab === id 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      <span className="font-bold uppercase tracking-widest text-[10px]">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-80 border-r border-white/5 p-8 flex flex-col gap-10">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white">M</div>
            <span className="text-white font-black uppercase tracking-tighter text-xl">Admin Hub</span>
          </div>
          
          <div className="space-y-2">
            <SidebarItem id="overview" icon={<LayoutDashboard className="w-5 h-5" />} label="Overview" />
            <SidebarItem id="leads" icon={<Users className="w-5 h-5" />} label="Leads / Messages" />
            <SidebarItem id="orders" icon={<CreditCard className="w-5 h-5" />} label="Sales / Orders" />
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">System Live</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">Logged in as <span className="text-white">Owner</span></p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
              {activeTab === 'overview' ? 'Dashboard' : activeTab === 'leads' ? 'Inquiry Management' : 'Order Control'}
            </h1>
            <p className="text-slate-500 mt-2 font-medium">Monitoring Minedore Digital ecosystem performance.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl px-6 py-3 flex items-center gap-3">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span className="text-white font-bold text-xs">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] group hover:border-indigo-600/50 transition-all">
                <BarChart3 className="w-10 h-10 text-indigo-500 mb-6" />
                <div className="text-5xl font-black text-white mb-2">{leads.length}</div>
                <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Total Inquiries</div>
              </div>
              <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] group hover:border-indigo-600/50 transition-all">
                <CreditCard className="w-10 h-10 text-emerald-500 mb-6" />
                <div className="text-5xl font-black text-white mb-2">{orders.length}</div>
                <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Recent Sales</div>
              </div>
              <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] group hover:border-indigo-600/50 transition-all">
                <Users className="w-10 h-10 text-amber-500 mb-6" />
                <div className="text-5xl font-black text-white mb-2">99%</div>
                <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Resolution Rate</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Recent Leads</h3>
                  <button onClick={() => setActiveTab('leads')} className="text-indigo-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">View All <ChevronRight className="w-4 h-4" /></button>
                </div>
                <div className="space-y-4">
                  {leads.slice(0, 5).map(lead => (
                    <div key={lead.id} className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{lead.name}</div>
                        <div className="text-slate-500 text-xs mt-1">{lead.email}</div>
                      </div>
                      <span className="text-[10px] font-black uppercase px-3 py-1 bg-indigo-600/10 text-indigo-400 rounded-full">{lead.status}</span>
                    </div>
                  ))}
                  {leads.length === 0 && <div className="text-center py-10 text-slate-600">No leads recorded.</div>}
                </div>
              </div>

              <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Recent Sales</h3>
                  <button onClick={() => setActiveTab('orders')} className="text-indigo-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">View All <ChevronRight className="w-4 h-4" /></button>
                </div>
                <div className="space-y-4">
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{order.plan} Plan</div>
                        <div className="text-slate-500 text-xs mt-1">{order.email}</div>
                      </div>
                      <div className="text-emerald-500 font-black">{order.price}</div>
                    </div>
                  ))}
                  {orders.length === 0 && <div className="text-center py-10 text-slate-600">No orders recorded.</div>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white/5 rounded-[3rem] border border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Search leads..." className="bg-slate-900 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-indigo-600" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <th className="px-10 py-6">User</th>
                    <th className="px-10 py-6">Message</th>
                    <th className="px-10 py-6">Date</th>
                    <th className="px-10 py-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leads.map(lead => (
                    <tr key={lead.id} className="group hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8">
                        <div className="text-white font-bold">{lead.name}</div>
                        <div className="text-slate-500 text-xs mt-1">{lead.email}</div>
                      </td>
                      <td className="px-10 py-8 max-w-xs">
                        <div className="text-slate-400 text-sm line-clamp-2">{lead.message}</div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="text-slate-500 text-xs">{new Date(lead.timestamp).toLocaleDateString()}</div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex gap-4">
                          <button className="p-3 bg-white/5 hover:bg-green-600 rounded-xl transition-all"><CheckCircle className="w-4 h-4 text-slate-400 group-hover:text-white" /></button>
                          <button onClick={() => handleDeleteLead(lead.id)} className="p-3 bg-white/5 hover:bg-red-600 rounded-xl transition-all"><Trash2 className="w-4 h-4 text-slate-400 group-hover:text-white" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white/5 rounded-[3rem] border border-white/5 overflow-hidden">
             <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <th className="px-10 py-6">Customer</th>
                    <th className="px-10 py-6">Plan / Type</th>
                    <th className="px-10 py-6">Price</th>
                    <th className="px-10 py-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {orders.map(order => (
                    <tr key={order.id} className="group hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8">
                        <div className="text-white font-bold">{order.email}</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">ID: {order.id}</div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/10">
                          {order.plan} {order.type === 'Enterprise' ? '(Bespoke)' : ''}
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="text-emerald-500 font-black text-xl">{order.price}</div>
                        <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Paid</div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex gap-4">
                          <button onClick={() => handleDeleteOrder(order.id)} className="p-3 bg-white/5 hover:bg-red-600 rounded-xl transition-all"><Trash2 className="w-4 h-4 text-slate-400 group-hover:text-white" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
