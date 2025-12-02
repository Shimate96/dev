import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export const UnitPicker: React.FC<any> = ({ units = ['pcs', 'box', 'kg'], onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={units}
        keyExtractor={(item: any, idx) => String(idx)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({ container: { maxHeight: 300 }, item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' } });
