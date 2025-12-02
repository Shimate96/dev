import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AlertsScreen } from '../screens/AlertsScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const AlertsStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Alerts" component={AlertsScreen} options={{ title: 'Alerts' }} />
  </Stack.Navigator>
);

export default AlertsStackNavigator;
