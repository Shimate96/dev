import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InventoryStackNavigator from './InventoryStackNavigator';
import DashboardStackNavigator from './DashboardStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

const Tab = createBottomTabNavigator();

export const MainTabNavigator: React.FC<any> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="InventoryTab" component={InventoryStackNavigator} options={{ title: 'Inventory', headerShown: false }} />
      <Tab.Screen name="DashboardTab" component={DashboardStackNavigator} options={{ title: 'Dashboard', headerShown: false }} />
      <Tab.Screen name="SettingsTab" component={SettingsStackNavigator} options={{ title: 'Settings', headerShown: false }} />
    </Tab.Navigator>
  );
};
