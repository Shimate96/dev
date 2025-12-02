import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface InventoryItemCardProps {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  onPress?: () => void;
}

export const InventoryItemCard: React.FC<InventoryItemCardProps> = ({
  name,
  quantity,
  unit,
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.quantityBadge}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Unit: {unit}</Text>
        <Text style={styles.label}>Category: {category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityBadge: {
    backgroundColor: '#E63946',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantity: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
});
