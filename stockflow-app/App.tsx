import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { InventoryProvider } from './context/InventoryContext';
import DrawerNavigator from './navigation/DrawerNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // Simulate loading resources
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the splash screen to hide after we've finished loading
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <InventoryProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <DrawerNavigator />
      </NavigationContainer>
    </InventoryProvider>
  );
}
