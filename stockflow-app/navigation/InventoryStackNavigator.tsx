import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InventoryScreen } from '../screens/InventoryScreen';
import { ItemDetailScreen } from '../screens/ItemDetailScreen';
import { AddEditItemScreen } from '../screens/AddEditItemScreen';
import { ScannerScreen } from '../screens/ScannerScreen';
import { AdjustStockScreen } from '../screens/AdjustStockScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const InventoryStackNavigator: React.FC<any> = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen name="InventoryList" component={InventoryScreen} options={{ title: 'Inventory' }} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} options={{ title: 'Item Details' }} />
      <Stack.Screen name="AddEditItem" component={AddEditItemScreen} options={{ title: 'Add / Edit Item' }} />
      <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner' }} />
      <Stack.Screen name="AdjustStock" component={AdjustStockScreen} options={{ title: 'Adjust Stock' }} />
    </Stack.Navigator>
  );
};

export default InventoryStackNavigator;
