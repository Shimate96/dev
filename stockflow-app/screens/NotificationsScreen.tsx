import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const NotificationsScreen: React.FC<any> = () => {
  const [notifications] = React.useState([
    { id: '1', title: 'Stock Updated', message: 'Medications quantity updated', read: false },
    { id: '2', title: 'Alert', message: 'Low stock for Equipment', read: true },
  ]);

  const renderNotification = ({ item }: any) => (
    <View style={[styles.notifCard, !item.read && styles.unread]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={notifications} renderItem={renderNotification} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  notifCard: { backgroundColor: '#f5f5f5', padding: 15, marginBottom: 10, borderRadius: 8 },
  unread: { backgroundColor: '#E8F5E9' },
  title: { fontSize: 16, fontWeight: 'bold' },
  message: { fontSize: 14, color: '#666', marginTop: 5 },
});
