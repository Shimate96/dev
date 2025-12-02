import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const HomeButtonBar: React.FC<any> = ({ onAdd, onScan }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onScan}>
        <Text style={styles.text}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', padding: 12 },
  button: { backgroundColor: '#E63946', padding: 10, borderRadius: 8 },
  text: { color: '#fff', fontWeight: 'bold' },
});
