import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const EventsScreen: React.FC<any> = ({ navigation }) => {
  const handleAddEvent = () => {
    navigation.navigate('AddEvent');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  addButton: { backgroundColor: '#E63946', padding: 15, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
});
