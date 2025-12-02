import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const DrawerContent: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Inventory')}>
        <Text>Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, item: { paddingVertical: 12 } });
