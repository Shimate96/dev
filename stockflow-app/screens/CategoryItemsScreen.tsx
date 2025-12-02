import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface CategoryItem {
  id: string;
  name: string;
  quantity: number;
}

export const CategoryItemsScreen: React.FC<any> = ({ route }) => {
  const { categoryId } = route.params || {};

  const renderItem = ({ item }: { item: CategoryItem }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList<CategoryItem> data={[]} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  itemCard: { backgroundColor: '#f5f5f5', padding: 15, marginBottom: 10, borderRadius: 8 },
  itemName: { fontSize: 16, fontWeight: '500' },
  itemQty: { fontSize: 14, color: '#666', marginTop: 5 },
});
