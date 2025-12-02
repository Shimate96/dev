import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const InventoryScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text>Inventory Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
