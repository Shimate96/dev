import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const CategoriesScreen: React.FC<any> = () => {
  const [categories, setCategories] = React.useState([
    { id: '1', name: 'Medications' },
    { id: '2', name: 'Equipment' },
    { id: '3', name: 'Supplies' },
  ]);

  const renderCategory = ({ item }: any) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  categoryCard: { backgroundColor: '#f5f5f5', padding: 15, marginBottom: 10, borderRadius: 8 },
  categoryName: { fontSize: 16, fontWeight: '500' },
});
