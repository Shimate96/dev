import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const NotificationsStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
  </Stack.Navigator>
);

export default NotificationsStackNavigator;
