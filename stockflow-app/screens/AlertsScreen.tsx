import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type AlertType = 'LOW_STOCK' | 'EXPIRING_SOON' | 'EXPIRED';
interface Alert {
  id: string;
  message: string;
  type: AlertType;
}

export const AlertsScreen: React.FC<any> = () => {
  const [alerts] = React.useState<Alert[]>([
    { id: '1', message: 'Low stock: Medications', type: 'LOW_STOCK' },
    { id: '2', message: 'Expiring soon: Supplies', type: 'EXPIRING_SOON' },
  ]);

  const renderAlert = ({ item }: { item: Alert }) => {
    const alertStyles: Record<AlertType, { backgroundColor: string }> = {
      LOW_STOCK: { backgroundColor: '#FFE5E5' },
      EXPIRING_SOON: { backgroundColor: '#FFF3E0' },
      EXPIRED: { backgroundColor: '#FFCDD2' },
    };
    return (
      <View style={[styles.alertCard, alertStyles[item.type]]}>
        <Text style={styles.alertMessage}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={alerts} renderItem={renderAlert} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  alertCard: { padding: 15, marginBottom: 10, borderRadius: 8 },
  LOW_STOCK: { backgroundColor: '#FFE5E5' },
  EXPIRING_SOON: { backgroundColor: '#FFF3E0' },
  EXPIRED: { backgroundColor: '#FFCDD2' },
  alertMessage: { fontSize: 16, fontWeight: '500' },
});
