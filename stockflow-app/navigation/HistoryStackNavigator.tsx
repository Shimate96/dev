import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../screens/HistoryScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const HistoryStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
  </Stack.Navigator>
);

export default HistoryStackNavigator;
