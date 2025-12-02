import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScannerScreen from '../screens/ScannerScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const ScannerStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner' }} />
  </Stack.Navigator>
);

export default ScannerStackNavigator;
