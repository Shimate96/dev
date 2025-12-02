import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventsScreen } from '../screens/EventsScreen';
import { AddEventScreen } from '../screens/AddEventScreen';
import { EditEventScreen } from '../screens/EditEventScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const EventsStackNavigator: React.FC<any> = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Events' }} />
    <Stack.Screen name="AddEvent" component={AddEventScreen} options={{ title: 'Add Event' }} />
    <Stack.Screen name="EditEvent" component={EditEventScreen} options={{ title: 'Edit Event' }} />
  </Stack.Navigator>
);

export default EventsStackNavigator;
