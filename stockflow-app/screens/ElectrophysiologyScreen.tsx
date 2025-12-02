import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ElectrophysiologyScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Electrophysiology Tracking</Text>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Active Sessions:</Text>
        <Text style={styles.value}>3</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Total Procedures:</Text>
        <Text style={styles.value}>24</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  infoCard: { backgroundColor: '#f5f5f5', padding: 15, marginBottom: 15, borderRadius: 8 },
  label: { fontSize: 12, color: '#666' },
  value: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
});
