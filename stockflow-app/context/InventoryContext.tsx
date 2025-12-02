import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';
import { AppState, InventoryItem, Category, Event, Alert, Notification, AdjustmentHistory } from '../types/inventory';

interface InventoryContextType extends AppState {
  addItem: (item: InventoryItem) => void;
  updateItem: (id: string, item: Partial<InventoryItem>) => void;
  deleteItem: (id: string) => void;
  addCategory: (category: Category) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  addAlert: (alert: Alert) => void;
  markAlertAsRead: (id: string) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: string) => void;
  addAdjustment: (adjustment: AdjustmentHistory) => void;
  clearError: () => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    items: [],
    categories: [],
    events: [],
    alerts: [],
    notifications: [],
    history: [],
    user: null,
    loading: false,
    error: null,
  });

  const addItem = useCallback((item: InventoryItem) => {
    setState(prev => ({
      ...prev,
      items: [...prev.items, item],
    }));
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<InventoryItem>) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, ...updates } : item),
    }));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
    }));
  }, []);

  const addCategory = useCallback((category: Category) => {
    setState(prev => ({
      ...prev,
      categories: [...prev.categories, category],
    }));
  }, []);

  const updateCategory = useCallback((id: string, updates: Partial<Category>) => {
    setState(prev => ({
      ...prev,
      categories: prev.categories.map(cat => cat.id === id ? { ...cat, ...updates } : cat),
    }));
  }, []);

  const deleteCategory = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat.id !== id),
    }));
  }, []);

  const addEvent = useCallback((event: Event) => {
    setState(prev => ({
      ...prev,
      events: [...prev.events, event],
    }));
  }, []);

  const updateEvent = useCallback((id: string, updates: Partial<Event>) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(event => event.id === id ? { ...event, ...updates } : event),
    }));
  }, []);

  const deleteEvent = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      events: prev.events.filter(event => event.id !== id),
    }));
  }, []);

  const addAlert = useCallback((alert: Alert) => {
    setState(prev => ({
      ...prev,
      alerts: [...prev.alerts, alert],
    }));
  }, []);

  const markAlertAsRead = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      alerts: prev.alerts.map(alert => alert.id === id ? { ...alert, read: true } : alert),
    }));
  }, []);

  const addNotification = useCallback((notification: Notification) => {
    setState(prev => ({
      ...prev,
      notifications: [...prev.notifications, notification],
    }));
  }, []);

  const markNotificationAsRead = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif => notif.id === id ? { ...notif, read: true } : notif),
    }));
  }, []);

  const addAdjustment = useCallback((adjustment: AdjustmentHistory) => {
    setState(prev => ({
      ...prev,
      history: [...prev.history, adjustment],
    }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({
      ...prev,
      error: null,
    }));
  }, []);

  const value: InventoryContextType = {
    ...state,
    addItem,
    updateItem,
    deleteItem,
    addCategory,
    updateCategory,
    deleteCategory,
    addEvent,
    updateEvent,
    deleteEvent,
    addAlert,
    markAlertAsRead,
    addNotification,
    markNotificationAsRead,
    addAdjustment,
    clearError,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within InventoryProvider');
  }
  return context;
};
