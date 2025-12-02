import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens/DashboardScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const DashboardStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
  </Stack.Navigator>
);

export default DashboardStackNavigator;
