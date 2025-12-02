import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ICIProcedureScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ICI Procedure Tracking</Text>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Last Procedure:</Text>
        <Text style={styles.value}>2024-12-01</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Next Scheduled:</Text>
        <Text style={styles.value}>2024-12-15</Text>
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
