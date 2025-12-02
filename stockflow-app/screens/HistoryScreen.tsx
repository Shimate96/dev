import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const HistoryScreen: React.FC<any> = () => {
  const [history] = React.useState([
    { id: '1', item: 'Medications', change: '+50', reason: 'Stock replenishment' },
    { id: '2', item: 'Equipment', change: '-5', reason: 'Usage' },
  ]);

  const renderHistory = ({ item }: any) => (
    <View style={styles.historyCard}>
      <View style={styles.row}>
        <Text style={styles.itemName}>{item.item}</Text>
        <Text style={[styles.change, item.change.startsWith('+') ? styles.positive : styles.negative]}>{item.change}</Text>
      </View>
      <Text style={styles.reason}>{item.reason}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={history} renderItem={renderHistory} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  historyCard: { backgroundColor: '#f5f5f5', padding: 15, marginBottom: 10, borderRadius: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  itemName: { fontSize: 16, fontWeight: '500' },
  change: { fontSize: 16, fontWeight: 'bold' },
  positive: { color: '#06A77D' },
  negative: { color: '#E63946' },
  reason: { fontSize: 12, color: '#666', marginTop: 5 },
});
