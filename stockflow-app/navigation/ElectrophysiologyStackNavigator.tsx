import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ElectrophysiologyScreen } from '../screens/ElectrophysiologyScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const ElectrophysiologyStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Electrophysiology" component={ElectrophysiologyScreen} options={{ title: 'Electrophysiology' }} />
  </Stack.Navigator>
);

export default ElectrophysiologyStackNavigator;
