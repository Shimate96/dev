import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export const CategoryPicker: React.FC<any> = ({ categories = [], onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { maxHeight: 300 },
  item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
});
