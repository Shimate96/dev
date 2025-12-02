import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabNavigator } from './MainTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC<any> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
