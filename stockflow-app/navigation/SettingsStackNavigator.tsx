import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/SettingsScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
  </Stack.Navigator>
);

export default SettingsStackNavigator;
