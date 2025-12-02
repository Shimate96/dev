import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const ItemDetailScreen: React.FC<any> = ({ route }) => {
  const { item } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item?.name || 'Item Details'}</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.value}>{item?.quantity}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Unit:</Text>
        <Text style={styles.value}>{item?.unit}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{item?.category}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{item?.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});
