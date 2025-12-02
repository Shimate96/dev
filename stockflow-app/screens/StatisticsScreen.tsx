import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const StatisticsScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Total Items</Text>
        <Text style={styles.statValue}>245</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Low Stock</Text>
        <Text style={styles.statValue}>12</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Expired</Text>
        <Text style={styles.statValue}>3</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Total Value</Text>
        <Text style={styles.statValue}>$15,240</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, flexDirection: 'row', flexWrap: 'wrap' },
  statCard: { width: '48%', backgroundColor: '#f5f5f5', padding: 20, marginBottom: 15, marginRight: '4%', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  statLabel: { fontSize: 12, color: '#666', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#E63946' },
});
