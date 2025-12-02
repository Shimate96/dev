import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export const DevicePicker: React.FC<any> = ({ devices = [], onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
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

const styles = StyleSheet.create({ container: { maxHeight: 300 }, item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' } });
