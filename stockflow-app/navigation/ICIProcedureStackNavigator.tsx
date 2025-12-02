import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICIProcedureScreen } from '../screens/ICIProcedureScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const ICIProcedureStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="ICIProcedure" component={ICIProcedureScreen} options={{ title: 'ICI Procedures' }} />
  </Stack.Navigator>
);

export default ICIProcedureStackNavigator;
