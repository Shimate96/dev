// Inventory item types
export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  category: string;
  barcode?: string;
  expiryDate?: Date;
  location?: string;
  minStock: number;
  maxStock: number;
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  price?: number;
}

// Category types
export interface Category {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  createdAt: Date;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: string;
  type: 'ICI' | 'Electrophysiology' | 'Other';
  completed: boolean;
  createdAt: Date;
}

// Alert types
export interface Alert {
  id: string;
  itemId: string;
  type: 'LOW_STOCK' | 'EXPIRED' | 'EXPIRING_SOON';
  message: string;
  read: boolean;
  createdAt: Date;
}

// Notification types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'INFO' | 'WARNING' | 'ERROR';
  read: boolean;
  createdAt: Date;
}

// History/Adjustment types
export interface AdjustmentHistory {
  id: string;
  itemId: string;
  previousQuantity: number;
  newQuantity: number;
  reason: string;
  adjustedAt: Date;
  adjustedBy: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  createdAt: Date;
}

// App context state
export interface AppState {
  items: InventoryItem[];
  categories: Category[];
  events: Event[];
  alerts: Alert[];
  notifications: Notification[];
  history: AdjustmentHistory[];
  user: User | null;
  loading: boolean;
  error: string | null;
}
