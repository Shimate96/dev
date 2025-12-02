import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import AddEditCategoryScreen from '../screens/AddEditCategoryScreen';
import { defaultStackOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator: React.FC<any> = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Categories' }} />
      <Stack.Screen name="CategoryItems" component={CategoryItemsScreen} options={{ title: 'Category Items' }} />
      <Stack.Screen name="AddEditCategory" component={AddEditCategoryScreen} options={{ title: 'Add / Edit Category' }} />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
