
export interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'New' | 'Resolved';
}

export interface Order {
  id: string;
  plan: string;
  email: string;
  price: string;
  timestamp: string;
  type: 'Subscription' | 'Enterprise';
  details?: string[];
}

const LEADS_KEY = 'minedore_leads';
const ORDERS_KEY = 'minedore_orders';

export const dataService = {
  // Leads Management
  saveLead: (lead: Omit<Lead, 'id' | 'timestamp' | 'status'>) => {
    const leads = dataService.getLeads();
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: 'New'
    };
    localStorage.setItem(LEADS_KEY, JSON.stringify([newLead, ...leads]));
  },
  
  getLeads: (): Lead[] => {
    const data = localStorage.getItem(LEADS_KEY);
    return data ? JSON.parse(data) : [];
  },

  deleteLead: (id: string) => {
    const leads = dataService.getLeads().filter(l => l.id !== id);
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  },

  // Orders Management
  saveOrder: (order: Omit<Order, 'id' | 'timestamp'>) => {
    const orders = dataService.getOrders();
    const newOrder: Order = {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(ORDERS_KEY, JSON.stringify([newOrder, ...orders]));
  },

  getOrders: (): Order[] => {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  deleteOrder: (id: string) => {
    const orders = dataService.getOrders().filter(o => o.id !== id);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }
};
