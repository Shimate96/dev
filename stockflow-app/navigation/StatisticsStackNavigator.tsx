import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatisticsScreen from '../screens/StatisticsScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const StatisticsStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ title: 'Statistics' }} />
  </Stack.Navigator>
);

export default StatisticsStackNavigator;
